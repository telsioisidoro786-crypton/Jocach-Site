import { FormEvent, useMemo, useState } from "react";
import {
  AlertCircle,
  BarChart3,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  ConciergeBell,
  Headphones,
  HelpCircle,
  LayoutDashboard,
  LockKeyhole,
  Menu,
  MessageCircle,
  MoreHorizontal,
  PhoneCall,
  Plus,
  RefreshCw,
  Search,
  Send,
  Settings2,
  ShieldCheck,
  Sparkles,
  Users,
  UtensilsCrossed,
  X,
} from "lucide-react";
import "./index.css";

type Role = "bot" | "user";
type Message = { id: number; role: Role; text: string; time: string; kind?: "normal" | "success" | "fallback" };

const slots = ["19:00", "19:30", "20:00", "20:30", "21:00"];
const quickActions = ["Reservar mesa", "Alterar reserva", "Ver menu", "Falar com a equipa"];

const initialMessages: Message[] = [
  { id: 1, role: "bot", text: "Olá, Inês. Sou o Mimo, o assistente da Casa Mimo. Posso tratar da sua mesa em menos de um minuto.", time: "19:38" },
  { id: 2, role: "bot", text: "Para começar: procura uma mesa para hoje ou para outra data?", time: "19:38" },
  { id: 3, role: "user", text: "Queria reservar para hoje, por favor.", time: "19:39" },
  { id: 4, role: "bot", text: "Perfeito. Tenho disponibilidade para 2 pessoas. Escolha o horário que prefere:", time: "19:39" },
];

function now() {
  return new Intl.DateTimeFormat("pt-PT", { hour: "2-digit", minute: "2-digit" }).format(new Date());
}

function BotAvatar({ small = false }: { small?: boolean }) {
  return <div className={`bot-avatar ${small ? "bot-avatar-small" : ""}`}><Sparkles size={small ? 13 : 16} strokeWidth={2.4} /></div>;
}

function Sidebar({ active, setActive }: { active: string; setActive: (value: string) => void }) {
  const items = [
    { label: "Visão geral", icon: LayoutDashboard },
    { label: "Conversas", icon: MessageCircle, count: "12" },
    { label: "Reservas", icon: CalendarDays },
    { label: "Insights", icon: BarChart3 },
  ];
  return <aside className="sidebar">
    <div className="brand"><div className="brand-mark"><UtensilsCrossed size={19} /></div><div><strong>mimo</strong><span>restaurant OS</span></div></div>
    <div className="venue-switcher"><div className="venue-icon">CM</div><div><strong>Casa Mimo</strong><span>Soyo · Angola</span></div><ChevronRight size={15} /></div>
    <nav className="side-nav" aria-label="Navegação principal">
      <span className="nav-kicker">Operação</span>
      {items.map(item => <button key={item.label} className={`side-nav-item ${active === item.label ? "active" : ""}`} onClick={() => setActive(item.label)}><item.icon size={17} /><span>{item.label}</span>{item.count && <b>{item.count}</b>}</button>)}
      <span className="nav-kicker nav-kicker-later">Configuração</span>
      <button className={`side-nav-item ${active === "Definições" ? "active" : ""}`} onClick={() => setActive("Definições")}><Settings2 size={17} /><span>Definições</span></button>
      <button className={`side-nav-item ${active === "Permissões" ? "active" : ""}`} onClick={() => setActive("Permissões")}><ShieldCheck size={17} /><span>Permissões</span></button>
    </nav>
    <div className="sidebar-bottom"><div className="team-card"><div className="team-avatar">AS</div><div><strong>Andreia Silva</strong><span>Admin · online</span></div><MoreHorizontal size={16} /></div><div className="powered"><span className="online-dot" /> Sistema operacional online</div></div>
  </aside>;
}

function MessageBubble({ message }: { message: Message }) {
  return <div className={`message-row ${message.role}`}>
    {message.role === "bot" && <BotAvatar small />}
    <div className="message-content"><div className={`message-bubble ${message.kind === "success" ? "message-success" : message.kind === "fallback" ? "message-fallback" : ""}`}>{message.text}</div><span className="message-time">{message.time}{message.role === "user" && " · Visto"}</span></div>
  </div>;
}

export default function App() {
  const [active, setActive] = useState("Conversas");
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [humanRequested, setHumanRequested] = useState(false);

  const sendMessage = (text: string) => {
    const clean = text.trim();
    if (!clean || loading) return;
    setInput("");
    setMessages(prev => [...prev, { id: Date.now(), role: "user", text: clean, time: now() }]);
    setLoading(true);
    window.setTimeout(() => {
      const normalized = clean.toLowerCase();
      let reply = "Posso ajudar com reservas, disponibilidade, menu ou encaminhar a conversa para a equipa. O que prefere fazer?";
      let kind: Message["kind"] = "fallback";
      if (normalized.includes("menu")) { reply = "Claro. O menu de hoje está disponível aqui: entradas, pratos do dia e sobremesas. Quer que envie o menu completo por WhatsApp?"; kind = "normal"; }
      if (normalized.includes("equipa") || normalized.includes("humano") || normalized.includes("pessoa")) { setHumanRequested(true); reply = "A Andreia da equipa vai assumir esta conversa. Tempo médio de resposta: 3 minutos."; kind = "success"; }
      if (normalized.includes("reserv")) { reply = "Vamos tratar disso. Para quantas pessoas devo procurar uma mesa?"; kind = "normal"; }
      setMessages(prev => [...prev, { id: Date.now() + 1, role: "bot", text: reply, time: now(), kind }]);
      setLoading(false);
    }, 650);
  };

  const handleSubmit = (event: FormEvent) => { event.preventDefault(); sendMessage(input); };
  const chooseSlot = (slot: string) => {
    setSelectedSlot(slot);
    setMessages(prev => [...prev, { id: Date.now(), role: "user", text: `Fico com as ${slot}.`, time: now() }]);
    setLoading(true);
    window.setTimeout(() => { setMessages(prev => [...prev, { id: Date.now() + 1, role: "bot", text: `Boa escolha. As ${slot} estão disponíveis para 2 pessoas. Posso confirmar a reserva em nome de Inês?`, time: now() }]); setLoading(false); }, 550);
  };
  const confirmReservation = () => {
    if (!selectedSlot) return;
    setConfirmed(true);
    setMessages(prev => [...prev, { id: Date.now(), role: "user", text: "Sim, pode confirmar.", time: now() }, { id: Date.now() + 1, role: "bot", text: `Reserva confirmada para hoje às ${selectedSlot}. Enviámos os detalhes para o seu contacto. Até já!`, time: now(), kind: "success" }]);
  };
  const askHuman = () => { setHumanRequested(true); sendMessage("Quero falar com uma pessoa da equipa"); };
  const retry = () => { setError(false); setMessages(prev => [...prev, { id: Date.now(), role: "bot", text: "Ligação recuperada. Posso continuar a verificar a disponibilidade para si.", time: now(), kind: "success" }]); };
  const subtitle = useMemo(() => confirmed ? "Reserva confirmada" : humanRequested ? "A aguardar a equipa" : "A verificar disponibilidade", [confirmed, humanRequested]);

  return <div className="app-shell">
    <Sidebar active={active} setActive={setActive} />
    <main className="workspace">
      <header className="topbar"><div className="topbar-title"><span className="breadcrumb">Conversas <ChevronRight size={13} /> Hoje</span><h1>Central de reservas</h1></div><div className="topbar-actions"><button className="icon-button" aria-label="Pesquisar"><Search size={18} /></button><button className="icon-button" aria-label="Ajuda"><HelpCircle size={18} /></button><div className="topbar-divider" /><span className="live-status"><span className="online-dot" /> Bot ativo</span><button className="user-chip"><div className="team-avatar">AS</div><ChevronRight size={14} /></button></div></header>
      <div className="content-grid">
        <section className="conversation-panel">
          <div className="conversation-head"><div className="conversation-person"><BotAvatar /><div><div className="person-name">Mimo <span className="verified"><Check size={11} /></span></div><div className="person-status"><span className="online-dot" /> {subtitle}</div></div></div><div className="conversation-actions"><button className="soft-button"><PhoneCall size={15} /> Contactar</button><button className="icon-button subtle"><MoreHorizontal size={18} /></button></div></div>
          {error && <div className="error-banner"><AlertCircle size={16} /><span>Não foi possível atualizar a disponibilidade.</span><button onClick={retry}><RefreshCw size={14} /> Tentar novamente</button><button className="close-banner" onClick={() => setError(false)}><X size={14} /></button></div>}
          <div className="conversation-body"><div className="date-divider"><span>Hoje, 03 de outubro</span></div>{messages.map(message => <MessageBubble key={message.id} message={message} />)}{loading && <div className="message-row bot"><BotAvatar small /><div className="typing"><i /><i /><i /></div></div>}
            {!confirmed && !humanRequested && <div className="slot-card"><div className="slot-card-head"><div><span className="mini-label">Disponibilidade em tempo real</span><strong>Hoje · 03 outubro · 2 pessoas</strong></div><span className="available-badge"><span className="online-dot" /> 5 lugares</span></div><div className="slot-list">{slots.map(slot => <button key={slot} className={`slot-button ${selectedSlot === slot ? "selected" : ""}`} onClick={() => chooseSlot(slot)}><Clock3 size={14} />{slot}</button>)}</div></div>}
            {selectedSlot && !confirmed && <div className="confirm-card"><div className="confirm-icon"><CheckCircle2 size={18} /></div><div><strong>Segurar mesa às {selectedSlot}?</strong><span>A reserva fica pendente até confirmar.</span></div><button className="confirm-button" onClick={confirmReservation}>Confirmar <Check size={15} /></button></div>}
            {humanRequested && <div className="human-card"><div className="human-icon"><Headphones size={18} /></div><div><strong>Conversa encaminhada</strong><span>Andreia Silva foi notificada e responderá em breve.</span></div><span className="eta">~ 3 min</span></div>}
          </div>
          <div className="quick-actions"><span>Sugestões</span>{quickActions.map(action => <button key={action} onClick={() => action === "Falar com a equipa" ? askHuman() : sendMessage(action)}>{action}</button>)}</div>
          <form className="composer" onSubmit={handleSubmit}><button type="button" className="composer-add" aria-label="Adicionar"><Plus size={18} /></button><input value={input} onChange={event => setInput(event.target.value)} placeholder="Escreva uma mensagem..." aria-label="Mensagem" /><span className="composer-hint">Enter</span><button className="send-button" type="submit" aria-label="Enviar"><Send size={17} /></button></form>
          <div className="privacy-note"><LockKeyhole size={12} /> Conversa protegida · Dados usados apenas para gerir a sua reserva</div>
        </section>
        <aside className="insights-panel">
          <div className="insights-head"><div><span className="eyebrow">Detalhes da conversa</span><h2>Inês Madalena</h2></div><button className="icon-button subtle"><MoreHorizontal size={18} /></button></div>
          <div className="profile-row"><div className="profile-avatar">IM</div><div><strong>Cliente recorrente</strong><span>3 reservas · última há 12 dias</span></div><button className="profile-more">Ver perfil</button></div>
          <div className="detail-section"><div className="detail-label"><CalendarDays size={15} /> Reserva em curso</div><div className={`reservation-card ${confirmed ? "is-confirmed" : ""}`}><div className="reservation-top"><span className="reservation-status"><span className="status-dot" /> {confirmed ? "Confirmada" : "A recolher dados"}</span><button><MoreHorizontal size={16} /></button></div><div className="reservation-main"><strong>Hoje, 03 out.</strong><span>{selectedSlot || "Escolher horário"} · 2 pessoas</span></div><div className="reservation-bottom"><span><ConciergeBell size={14} /> Mesa interior</span><span>Fonte: Bot</span></div></div></div>
          <div className="detail-section"><div className="detail-label"><BarChart3 size={15} /> Utilização hoje</div><div className="metric-grid"><div className="metric"><span>Conversas</span><strong>48</strong><small className="up">+18%</small></div><div className="metric"><span>Reservas</span><strong>19</strong><small className="up">+6%</small></div><div className="metric"><span>Conversão</span><strong>39,6%</strong><small className="up">+4,2%</small></div><div className="metric"><span>Escaladas</span><strong>4</strong><small>8,3% do total</small></div></div></div>
          <div className="detail-section guardrails"><div className="detail-label"><ShieldCheck size={15} /> Controlos ativos</div><div className="guardrail-row"><span><span className="check-dot"><Check size={11} /></span> Perguntas de alergias</span><span className="enabled">Ativo</span></div><div className="guardrail-row"><span><span className="check-dot"><Check size={11} /></span> Limite de reservas</span><span className="enabled">Ativo</span></div><div className="guardrail-row"><span><span className="check-dot"><Check size={11} /></span> Escalonamento humano</span><span className="enabled">Ativo</span></div></div>
          <div className="insights-footer"><button className="outline-full" onClick={() => setError(true)}><AlertCircle size={14} /> Simular estado de erro</button><span><Users size={13} /> 2 membros online</span></div>
        </aside>
      </div>
    </main>
  </div>;
}

// Exports de compatibilidade para páginas institucionais legadas mantidas no repositório.
export function SiteHeader({ overlay: _overlay }: { overlay?: boolean }) { return null; }
export function SiteFooter() { return null; }
export function SectionIntro({ title }: { title?: string; eyebrow?: string; body?: string; light?: boolean }) { return <>{title ? <h2>{title}</h2> : null}</>; }
export function LocationBlock() { return null; }
export function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) { return <a href={href}>{children}</a>; }
export function ContactLink() { return null; }
export function ServiceIcon({ type: _type }: { type?: string }) { return null; }
