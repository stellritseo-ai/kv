export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  projectType: string;
  description: string;
  contactTime: string;
  status: "new" | "contacted" | "consultation_scheduled" | "proposal_sent" | "won" | "lost";
  estimatedValue: number;
  notes?: string;
  createdAt: string;
  photos?: string[];
}

export interface Review {
  id: string;
  title: string;
  text: string;
  author: string;
  location: string;
  rating: number;
  featured: boolean;
  replyText?: string;
  createdAt: string;
  photos?: string[];
  role?: string;
  initials?: string;
  avatarColor?: string;
}

export interface WebEmail {
  id: string;
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message?: string;
  source?: string;
  createdAt: string;
}


// Initial leads pre-seeded
export const INITIAL_LEADS: Lead[] = [
  {
    id: "lead-1",
    name: "Michael Reynolds",
    email: "m.reynolds@gmail.com",
    phone: "(732) 555-0192",
    address: "240 Corlies Ave, Neptune, NJ 07753",
    projectType: "Kitchen Remodeling",
    description: "Looking for complete kitchen redesign, new custom cabinetry, quartz countertops, and island installation.",
    contactTime: "morning",
    status: "new",
    estimatedValue: 28500,
    createdAt: "2026-06-15T09:30:00Z"
  },
  {
    id: "lead-2",
    name: "Sarah Jenkins",
    email: "sarah.jenkins@yahoo.com",
    phone: "(732) 555-8831",
    address: "512 Cookman Ave, Asbury Park, NJ 07712",
    projectType: "Bathroom Remodeling",
    description: "Master bathroom gut and remodel with walk-in tile shower, dual vanity, and radiant floor heating.",
    contactTime: "afternoon",
    status: "contacted",
    estimatedValue: 16500,
    createdAt: "2026-06-14T14:15:00Z"
  },
  {
    id: "lead-3",
    name: "David Miller",
    email: "dmiller_nj@outlook.com",
    phone: "(732) 555-4421",
    address: "88 Main Ave, Ocean Grove, NJ 07756",
    projectType: "Deck & Outdoor Living",
    description: "Multi-level composite deck installation with built-in bench seating and outdoor lighting.",
    contactTime: "evening",
    status: "proposal_sent",
    estimatedValue: 19800,
    createdAt: "2026-06-12T11:00:00Z"
  },
  {
    id: "lead-4",
    name: "Anthony Russo",
    email: "anthony.russo@gmail.com",
    phone: "(732) 555-7729",
    address: "310 Ocean Ave, Bradley Beach, NJ 07720",
    projectType: "General Contracting",
    description: "Interior layout modifications, load-bearing beam removal, open floor plan conversion, and hardwood flooring.",
    contactTime: "afternoon",
    status: "consultation_scheduled",
    estimatedValue: 34000,
    createdAt: "2026-06-11T16:40:00Z"
  },
  {
    id: "lead-5",
    name: "Amanda Taylor",
    email: "amanda.taylor@comcast.net",
    phone: "(732) 555-1284",
    address: "704 10th Ave, Belmar, NJ 07719",
    projectType: "Home Additions",
    description: "Second story master suite addition over existing garage with ensuite bath and walk-in closet.",
    contactTime: "morning",
    status: "won",
    notes: "Permits approved and project initiated on schedule.",
    estimatedValue: 68000,
    createdAt: "2026-06-08T10:10:00Z"
  },
  {
    id: "lead-6",
    name: "James Wilson",
    email: "jwilson_eng@gmail.com",
    phone: "(732) 555-9012",
    address: "1203 3rd Ave, Spring Lake, NJ 07762",
    projectType: "Property Maintenance",
    description: "Seasonal preventative maintenance, trim carpentry repair, power washing, and gutter protection.",
    contactTime: "evening",
    status: "new",
    estimatedValue: 4200,
    createdAt: "2026-06-05T15:20:00Z"
  },
  {
    id: "lead-7",
    name: "Robert Palmer",
    email: "rpalmer.biz@yahoo.com",
    phone: "(732) 555-3312",
    address: "1800 Route 35, Wall Township, NJ 07719",
    projectType: "Commercial Improvements",
    description: "Retail showroom remodeling, commercial drywall partition install, and drop-ceiling upgrade.",
    contactTime: "morning",
    status: "new",
    estimatedValue: 24500,
    createdAt: "2026-06-16T08:45:00Z"
  }
];

// Initial reviews pre-seeded for KV Property Inc in Neptune, NJ & surrounding area
export const INITIAL_REVIEWS: Review[] = [
  {
    id: "review-1",
    title: "A Complete Kitchen Transformation",
    text: "KV Property Inc remodeled our entire kitchen in Neptune, NJ and the craftsmanship is truly remarkable. From custom cabinets to granite counters, the process was seamless, communicative, and on schedule. Their 20+ years of experience shows in every detail.",
    author: "The Carter Family",
    location: "Neptune, NJ",
    rating: 5,
    featured: true,
    createdAt: "2026-05-10T10:00:00Z",
    initials: "CF",
    avatarColor: "#1D4ED8",
    role: "Homeowner, Neptune, NJ"
  },
  {
    id: "review-2",
    title: "Turned Our Bathroom Into An Oasis",
    text: "Our outdated bathroom is now our favorite room in our Asbury Park home! KV Property Inc handled everything from plumbing and waterproofing to custom glass and tilework. Licensed, insured, and very professional.",
    author: "Melissa & Ben R.",
    location: "Asbury Park, NJ",
    rating: 5,
    featured: true,
    createdAt: "2026-05-18T14:30:00Z",
    initials: "MR",
    avatarColor: "#7C3AED",
    role: "Homeowner, Asbury Park, NJ"
  },
  {
    id: "review-3",
    title: "Honest Contracting & Fast Emergency Response",
    text: "When storm damage affected our roof overhang and deck, KV Property Inc responded immediately. Their 24/7 emergency service and clear, honest estimate gave us huge peace of mind. Exceptional craftsmanship.",
    author: "David H.",
    location: "Ocean Grove, NJ",
    rating: 5,
    featured: true,
    replyText: "Thank you David! Storm damage is always stressful, and our 24/7 team takes pride in securing local homes fast and doing permanent repairs built to last.",
    createdAt: "2026-05-24T08:15:00Z",
    initials: "DH",
    avatarColor: "#065F46",
    role: "Homeowner, Ocean Grove, NJ"
  },
  {
    id: "review-4",
    title: "Stunning Composite Deck & Outdoor Living",
    text: "We wanted a multi-level deck for family gatherings in Bradley Beach. KV Property Inc designed and built a gorgeous, solid outdoor space. Quality materials and great crew.",
    author: "Sofia & Mark T.",
    location: "Bradley Beach, NJ",
    rating: 5,
    featured: true,
    createdAt: "2026-06-01T11:00:00Z",
    initials: "SM",
    avatarColor: "#B45309",
    role: "Homeowner, Bradley Beach, NJ"
  },
  {
    id: "review-5",
    title: "High-End General Contracting",
    text: "KV Property Inc oversaw our entire two-floor home renovation in Spring Lake. Dependable scheduling, meticulous craftsmanship, and transparent budget management from start to finish.",
    author: "Marcus T.",
    location: "Spring Lake, NJ",
    rating: 5,
    featured: true,
    createdAt: "2026-06-02T10:00:00Z",
    initials: "MT",
    avatarColor: "#1D4ED8",
    role: "Homeowner, Spring Lake, NJ"
  },
  {
    id: "review-6",
    title: "Dependable Property Maintenance",
    text: "We contract KV Property Inc for ongoing commercial property repairs and maintenance in Wall Township. Their attention to detail keeps our facilities in top-tier shape.",
    author: "Priya S.",
    location: "Wall Township, NJ",
    rating: 5,
    featured: true,
    createdAt: "2026-06-03T11:15:00Z",
    initials: "PS",
    avatarColor: "#7C3AED",
    role: "Property Manager, Wall Township, NJ"
  },
  {
    id: "review-7",
    title: "Flawless Flooring & Interior Painting",
    text: "They installed hardwood flooring throughout our home and completed full interior painting. Crisp lines, level floors, and zero mess left behind. Truly built with purpose.",
    author: "Jared W.",
    location: "Belmar, NJ",
    rating: 5,
    featured: true,
    createdAt: "2026-06-04T12:00:00Z",
    initials: "JW",
    avatarColor: "#065F46",
    role: "Homeowner, Belmar, NJ"
  },
  {
    id: "review-8",
    title: "Seamless Home Addition",
    text: "Adding a family room and guest suite was a major undertaking, but KV Property Inc made it easy. They managed permits, framing, roofing, and finished it to match our home perfectly.",
    author: "Diana L.",
    location: "Freehold, NJ",
    rating: 5,
    featured: true,
    createdAt: "2026-06-05T14:30:00Z",
    initials: "DL",
    avatarColor: "#B45309",
    role: "Homeowner, Freehold, NJ"
  }
];

// ── IN-MEMORY / LOCAL STORAGE DATA LAYER (NO DATABASE / NO EXTERNAL SERVICES) ──

export interface GalleryPhoto {
  id: string;
  url: string;
  uploadedAt: string;
}

export interface ChatMessage {
  id: string;
  sender: "client" | "admin";
  text: string;
  timestamp: string;
}

export interface ChatSession {
  id: string;
  clientName: string;
  userName?: string;
  clientCity: string;
  clientEmail?: string;
  clientPhone?: string;
  lastMessage: string;
  lastMessageTime: string;
  unread: boolean;
  messages: ChatMessage[];
}

export interface PortalUser {
  id: string;
  username: string;
  role: string;
}

interface StoredUser extends PortalUser {
  password?: string;
}

export const INITIAL_CHATS: ChatSession[] = [
  {
    id: "session-1",
    clientName: "Michael Reynolds",
    clientCity: "Neptune, NJ",
    lastMessage: "Thank you, looking forward to the estimate on Thursday!",
    lastMessageTime: new Date(Date.now() - 3600000 * 2).toISOString(),
    unread: false,
    messages: [
      {
        id: "msg-1",
        sender: "client",
        text: "Hi! I am looking to remodel our kitchen in Neptune, NJ. Do you provide in-person estimates?",
        timestamp: new Date(Date.now() - 3600000 * 2.5).toISOString()
      },
      {
        id: "msg-2",
        sender: "admin",
        text: "Hi Michael! Yes, KV Property Inc provides estimates across Neptune and our 25-mile service area. We would be happy to discuss your vision.",
        timestamp: new Date(Date.now() - 3600000 * 2.2).toISOString()
      },
      {
        id: "msg-3",
        sender: "client",
        text: "Thank you, looking forward to the estimate on Thursday!",
        timestamp: new Date(Date.now() - 3600000 * 2).toISOString()
      }
    ]
  },
  {
    id: "session-2",
    clientName: "Sarah Jenkins",
    clientCity: "Asbury Park, NJ",
    lastMessage: "Sounds great, will check out your projects page!",
    lastMessageTime: new Date(Date.now() - 3600000 * 5).toISOString(),
    unread: false,
    messages: [
      {
        id: "msg-4",
        sender: "client",
        text: "Hello! Do you handle custom tile and walk-in bathroom remodeling in Asbury Park?",
        timestamp: new Date(Date.now() - 3600000 * 5.2).toISOString()
      },
      {
        id: "msg-5",
        sender: "admin",
        text: "Yes, absolutely! We specialize in complete bathroom renovations with high-quality tile, vanities, and fixtures.",
        timestamp: new Date(Date.now() - 3600000 * 5.1).toISOString()
      },
      {
        id: "msg-6",
        sender: "client",
        text: "Sounds great, will check out your projects page!",
        timestamp: new Date(Date.now() - 3600000 * 5).toISOString()
      }
    ]
  }
];

const INITIAL_WEB_EMAILS: WebEmail[] = [
  {
    id: "web-email-1",
    name: "Michael Reynolds",
    email: "m.reynolds@gmail.com",
    phone: "(732) 555-0192",
    service: "Kitchen Remodeling",
    message: "Looking for complete kitchen redesign, new custom cabinetry, quartz countertops, and island installation in Neptune, NJ.",
    source: "Landing Page Estimate Form",
    createdAt: "2026-06-15T09:30:00Z"
  }
];

const DEFAULT_USERS: StoredUser[] = [
  {
    id: "user-admin-1",
    username: "admin",
    password: "kvproperty2026",
    role: "admin"
  }
];

// In-memory runtime state
let memoryLeads: Lead[] = [...INITIAL_LEADS];
let memoryReviews: Review[] = [...INITIAL_REVIEWS];
let memoryChats: ChatSession[] = [...INITIAL_CHATS];
let memoryGallery: GalleryPhoto[] = [];
let memoryEmails: WebEmail[] = [...INITIAL_WEB_EMAILS];
let memoryUsers: StoredUser[] = [...DEFAULT_USERS];

function getStored<T>(key: string, defaultVal: T): T {
  if (typeof window === "undefined") return defaultVal;
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return defaultVal;
    return JSON.parse(raw);
  } catch {
    return defaultVal;
  }
}

function setStored<T>(key: string, val: T): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(key, JSON.stringify(val));
  } catch (err) {
    console.warn(`[LocalStore] Could not write ${key}:`, err);
  }
}

function loadLeads(): Lead[] {
  if (typeof window !== "undefined") {
    const data = getStored<Lead[]>("kv_leads", []);
    if (data && data.length > 0) return data;
    setStored("kv_leads", memoryLeads);
  }
  return memoryLeads;
}

function saveLeads(leads: Lead[]): void {
  memoryLeads = leads;
  setStored("kv_leads", leads);
}

function loadReviews(): Review[] {
  if (typeof window !== "undefined") {
    const data = getStored<Review[]>("kv_reviews", []);
    if (data && data.length > 0) return data;
    setStored("kv_reviews", memoryReviews);
  }
  return memoryReviews;
}

function saveReviews(reviews: Review[]): void {
  memoryReviews = reviews;
  setStored("kv_reviews", reviews);
}

function loadChats(): ChatSession[] {
  if (typeof window !== "undefined") {
    const data = getStored<ChatSession[]>("kv_chats", []);
    if (data && data.length > 0) return data;
    setStored("kv_chats", memoryChats);
  }
  return memoryChats;
}

function saveChats(chats: ChatSession[]): void {
  memoryChats = chats;
  setStored("kv_chats", chats);
}

function loadGallery(): GalleryPhoto[] {
  if (typeof window !== "undefined") {
    return getStored<GalleryPhoto[]>("kv_gallery", memoryGallery);
  }
  return memoryGallery;
}

function saveGallery(photos: GalleryPhoto[]): void {
  memoryGallery = photos;
  setStored("kv_gallery", photos);
}

function loadEmails(): WebEmail[] {
  if (typeof window !== "undefined") {
    const data = getStored<WebEmail[]>("kv_emails", []);
    if (data && data.length > 0) return data;
    setStored("kv_emails", memoryEmails);
  }
  return memoryEmails;
}

function saveEmails(emails: WebEmail[]): void {
  memoryEmails = emails;
  setStored("kv_emails", emails);
}

function loadUsers(): StoredUser[] {
  if (typeof window !== "undefined") {
    const data = getStored<StoredUser[]>("kv_users", []);
    if (data && data.length > 0) return data;
    setStored("kv_users", memoryUsers);
  }
  return memoryUsers;
}

function saveUsers(users: StoredUser[]): void {
  memoryUsers = users;
  setStored("kv_users", users);
}

// ── LEADS API ──

export const getLeads = async (): Promise<Lead[]> => {
  return loadLeads();
};

export const addLead = async (
  leadData: Omit<Lead, "id" | "status" | "estimatedValue" | "createdAt"> & { estimatedValue?: number }
): Promise<Lead> => {
  let estimatedValue = leadData.estimatedValue || 10000;
  if (!leadData.estimatedValue) {
    switch (leadData.projectType) {
      case "remodeling":
        estimatedValue = 65000;
        break;
      case "new-construction":
        estimatedValue = 250000;
        break;
      case "outdoor-kitchen":
        estimatedValue = 35000;
        break;
      case "fireplace":
        estimatedValue = 12000;
        break;
      case "patio":
        estimatedValue = 18000;
        break;
      case "hardscapes":
        estimatedValue = 15000;
        break;
      case "softscapes":
        estimatedValue = 8500;
        break;
      case "fencing":
        estimatedValue = 7500;
        break;
      case "turf":
        estimatedValue = 12000;
        break;
      case "commercial":
        estimatedValue = 95000;
        break;
    }
  }

  return addCustomLead({
    ...leadData,
    status: "new",
    estimatedValue
  });
};

export const addCustomLead = async (lead: Omit<Lead, "id" | "createdAt">): Promise<Lead> => {
  const newLead: Lead = {
    ...lead,
    id: `lead-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    createdAt: new Date().toISOString(),
    photos: lead.photos || []
  };
  const list = [newLead, ...loadLeads()];
  saveLeads(list);
  return newLead;
};

export const updateLeadStatus = async (id: string, status: Lead["status"]): Promise<Lead[] | null> => {
  const list = loadLeads().map((l) => (l.id === id ? { ...l, status } : l));
  saveLeads(list);
  return list;
};

export const updateLeadDetails = async (
  id: string,
  updates: Partial<Pick<Lead, "estimatedValue" | "notes" | "status">>
): Promise<Lead[] | null> => {
  const list = loadLeads().map((l) => (l.id === id ? { ...l, ...updates } : l));
  saveLeads(list);
  return list;
};

export const deleteLead = async (id: string): Promise<Lead[]> => {
  const list = loadLeads().filter((l) => l.id !== id);
  saveLeads(list);
  return list;
};

export const uploadLeadPhoto = async (leadId: string, base64Photo: string): Promise<Lead[]> => {
  const list = loadLeads().map((l) => {
    if (l.id === leadId) {
      return {
        ...l,
        photos: [...(l.photos || []), base64Photo]
      };
    }
    return l;
  });
  saveLeads(list);
  return list;
};

export const removeLeadPhoto = async (leadId: string, photoIndex: number): Promise<Lead[]> => {
  const list = loadLeads().map((l) => {
    if (l.id === leadId && l.photos) {
      const photos = [...l.photos];
      photos.splice(photoIndex, 1);
      return { ...l, photos };
    }
    return l;
  });
  saveLeads(list);
  return list;
};

// ── REVIEWS API ──

export const getReviews = async (): Promise<Review[]> => {
  return loadReviews();
};

export const addReview = async (
  reviewData: Omit<Review, "id" | "featured" | "createdAt"> & { newReviewPhoto?: string }
): Promise<Review> => {
  const authorName = reviewData.author || "Anonymous";
  const parts = authorName.trim().split(/\s+/);
  let computedInitials = "";
  if (parts.length > 0 && parts[0]) computedInitials += parts[0][0].toUpperCase();
  if (parts.length > 1 && parts[parts.length - 1]) computedInitials += parts[parts.length - 1][0].toUpperCase();
  if (!computedInitials) computedInitials = "U";

  const palette = ["#1D4ED8", "#7C3AED", "#065F46", "#B45309", "#BE185D", "#0F766E", "#9333EA", "#DC2626"];
  let hash = 0;
  for (let i = 0; i < authorName.length; i++) {
    hash = authorName.charCodeAt(i) + ((hash << 5) - hash);
  }
  const computedColor = palette[Math.abs(hash) % palette.length];
  const computedRole = reviewData.role || `Homeowner, ${reviewData.location || "Clearwater"}`;

  const photosList: string[] = reviewData.photos || [];
  if (reviewData.newReviewPhoto) {
    photosList.push(reviewData.newReviewPhoto);
  }

  const newReview: Review = {
    id: `review-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    title: reviewData.title,
    text: reviewData.text,
    author: reviewData.author,
    location: reviewData.location,
    rating: reviewData.rating,
    featured: true,
    createdAt: new Date().toISOString(),
    photos: photosList,
    role: computedRole,
    initials: computedInitials,
    avatarColor: computedColor
  };

  const list = [newReview, ...loadReviews()];
  saveReviews(list);
  return newReview;
};

export const toggleReviewFeatured = async (id: string): Promise<Review[]> => {
  const list = loadReviews().map((r) => (r.id === id ? { ...r, featured: !r.featured } : r));
  saveReviews(list);
  return list;
};

export const replyToReview = async (id: string, replyText: string): Promise<Review[]> => {
  const list = loadReviews().map((r) => (r.id === id ? { ...r, replyText } : r));
  saveReviews(list);
  return list;
};

export const uploadReviewPhoto = async (reviewId: string, base64Photo: string): Promise<Review[]> => {
  const list = loadReviews().map((r) => {
    if (r.id === reviewId) {
      return {
        ...r,
        photos: [...(r.photos || []), base64Photo]
      };
    }
    return r;
  });
  saveReviews(list);
  return list;
};

// ── CHAT API ──

export const getChatSessions = async (): Promise<ChatSession[]> => {
  return loadChats();
};

export const getChatSessionById = async (sessionId: string): Promise<ChatSession | null> => {
  const session = loadChats().find((s) => s.id === sessionId);
  return session || null;
};

export const createChatSession = async (
  clientName: string,
  clientCity: string = "Clearwater",
  clientEmail?: string,
  clientPhone?: string
): Promise<ChatSession> => {
  const newSession: ChatSession = {
    id: `session-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    clientName,
    clientCity,
    clientEmail: clientEmail || "",
    clientPhone: clientPhone || "",
    lastMessage: "Chat started",
    lastMessageTime: new Date().toISOString(),
    unread: false,
    messages: []
  };
  const list = [newSession, ...loadChats()];
  saveChats(list);
  return newSession;
};

export const sendChatMessage = async (
  sessionId: string,
  sender: "client" | "admin",
  text: string
): Promise<ChatSession | null> => {
  const isoTime = new Date().toISOString();
  const newMsg: ChatMessage = {
    id: `msg-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    sender,
    text,
    timestamp: isoTime
  };

  let updatedSession: ChatSession | null = null;
  const list = loadChats().map((s) => {
    if (s.id === sessionId) {
      updatedSession = {
        ...s,
        messages: [...s.messages, newMsg],
        lastMessage: text,
        lastMessageTime: isoTime,
        unread: sender === "client"
      };
      return updatedSession;
    }
    return s;
  });

  if (updatedSession) {
    saveChats(list);
  }
  return updatedSession;
};

export const markChatAsRead = async (sessionId: string): Promise<ChatSession[]> => {
  const list = loadChats().map((s) => (s.id === sessionId ? { ...s, unread: false } : s));
  saveChats(list);
  return list;
};

// ── GALLERY PHOTOS API ──

export const getGalleryPhotos = async (): Promise<GalleryPhoto[]> => {
  return loadGallery();
};

export const uploadGalleryPhoto = async (base64Photo: string): Promise<GalleryPhoto[]> => {
  const newPhoto: GalleryPhoto = {
    id: `photo-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    url: base64Photo,
    uploadedAt: new Date().toISOString()
  };
  const list = [newPhoto, ...loadGallery()];
  saveGallery(list);
  return list;
};

export const removeGalleryPhoto = async (id: string): Promise<GalleryPhoto[]> => {
  const list = loadGallery().filter((p) => p.id !== id);
  saveGallery(list);
  return list;
};

// ── WEB EMAILS API ──

export const getWebEmails = async (): Promise<WebEmail[]> => {
  return loadEmails();
};

export const addWebEmail = async (emailData: Omit<WebEmail, "id" | "createdAt">): Promise<WebEmail> => {
  const newEmail: WebEmail = {
    ...emailData,
    id: `email-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    createdAt: new Date().toISOString()
  };
  const list = [newEmail, ...loadEmails()];
  saveEmails(list);
  return newEmail;
};

export const deleteWebEmail = async (id: string): Promise<WebEmail[]> => {
  const list = loadEmails().filter((e) => e.id !== id);
  saveEmails(list);
  return list;
};

// ── AUTHENTICATION & PORTAL USERS API ──

export const loginAdmin = async (
  username: string,
  password: string
): Promise<{ success: boolean; token: string }> => {
  const users = loadUsers();
  const normalized = username.toLowerCase().trim();
  const user = users.find((u) => u.username.toLowerCase() === normalized);

  if (!user || user.password !== password) {
    throw new Error("Invalid username or password");
  }

  const token = `admin-token-${Date.now()}-${Math.random().toString(36).substring(2, 10)}`;
  if (typeof window !== "undefined") {
    window.localStorage.setItem("jrm-admin-token", token);
  }
  return { success: true, token };
};

export const verifyAdminToken = async (
  token: string
): Promise<{ valid: boolean; id?: string; username?: string; role?: string }> => {
  if (!token) return { valid: false };
  const users = loadUsers();
  const user = users[0] || DEFAULT_USERS[0];
  return {
    valid: true,
    id: user.id,
    username: user.username,
    role: user.role || "admin"
  };
};

export const updateUserCredentials = async (
  userId: string,
  username?: string,
  password?: string
): Promise<{ success: boolean; username: string }> => {
  const users = loadUsers();
  const user = users.find((u) => u.id === userId);
  if (!user) {
    throw new Error("User not found");
  }

  if (username && username.trim()) {
    const existing = users.find((u) => u.username.toLowerCase() === username.toLowerCase().trim() && u.id !== userId);
    if (existing) {
      throw new Error("Username already taken");
    }
    user.username = username.toLowerCase().trim();
  }

  if (password && password.trim()) {
    user.password = password;
  }

  saveUsers([...users]);
  return { success: true, username: user.username };
};

export const getPortalUsers = async (): Promise<PortalUser[]> => {
  return loadUsers().map(({ password: _, ...rest }) => rest);
};

export const createPortalUser = async (
  username: string,
  password: string,
  role: string
): Promise<{ success: boolean; id: string; username: string; role: string }> => {
  const users = loadUsers();
  const normalized = username.toLowerCase().trim();
  const existing = users.find((u) => u.username.toLowerCase() === normalized);
  if (existing) {
    throw new Error("Username already exists");
  }

  const newUser: StoredUser = {
    id: `user-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    username: normalized,
    password,
    role: role || "viewer"
  };

  users.push(newUser);
  saveUsers(users);
  return { success: true, id: newUser.id, username: newUser.username, role: newUser.role };
};

export const deletePortalUser = async (userId: string): Promise<{ success: boolean }> => {
  const users = loadUsers();
  const target = users.find((u) => u.id === userId);
  if (!target) {
    throw new Error("User not found");
  }
  if (target.username === "right") {
    throw new Error("Cannot delete primary administrator account");
  }

  const updated = users.filter((u) => u.id !== userId);
  saveUsers(updated);
  return { success: true };
};

// ── ANALYTICS HELPER ──

export const getAnalyticsData = () => {
  const leads = loadLeads();

  const totalValue = leads.reduce((acc, curr) => (curr.status !== "lost" ? acc + curr.estimatedValue : acc), 0);
  const activeCount = leads.filter((l) => ["contacted", "consultation_scheduled", "proposal_sent"].includes(l.status)).length;

  const wonLeads = leads.filter((l) => l.status === "won");
  const lostLeads = leads.filter((l) => l.status === "lost");
  const wonValue = wonLeads.reduce((acc, curr) => acc + curr.estimatedValue, 0);
  const totalClosed = wonLeads.length + lostLeads.length;
  const winRate = totalClosed > 0 ? Math.round((wonLeads.length / totalClosed) * 100) : 0;

  const averageValue = leads.length > 0 ? Math.round(leads.reduce((acc, curr) => acc + curr.estimatedValue, 0) / leads.length) : 0;

  const typeCounts: Record<string, { count: number; value: number }> = {};
  leads.forEach((l) => {
    if (!typeCounts[l.projectType]) {
      typeCounts[l.projectType] = { count: 0, value: 0 };
    }
    typeCounts[l.projectType].count += 1;
    typeCounts[l.projectType].value += l.estimatedValue;
  });

  const projectTypesChart = Object.entries(typeCounts).map(([name, data]) => ({
    name: name.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
    value: data.count,
    amount: data.value
  }));

  const statusLabels: Record<Lead["status"], string> = {
    new: "New Lead",
    contacted: "Contacted",
    consultation_scheduled: "Consultation Scheduled",
    proposal_sent: "Proposal Sent",
    won: "Contract Won",
    lost: "Lost / Closed"
  };

  const statusCounts: Record<string, number> = {
    "New Lead": 0,
    Contacted: 0,
    "Consultation Scheduled": 0,
    "Proposal Sent": 0,
    "Contract Won": 0,
    "Lost / Closed": 0
  };

  leads.forEach((l) => {
    const label = statusLabels[l.status];
    if (label) {
      statusCounts[label] = (statusCounts[label] || 0) + 1;
    }
  });

  const statusChart = Object.entries(statusCounts).map(([name, value]) => ({
    name,
    value
  }));

  const cityCounts: Record<string, number> = {};
  leads.forEach((l) => {
    const parts = l.address.split(",");
    let city = "Clearwater";
    if (parts.length >= 2) {
      city = parts[parts.length - 2].trim();
    }
    cityCounts[city] = (cityCounts[city] || 0) + 1;
  });

  const regionChart = Object.entries(cityCounts)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value);

  const monthlyData: Record<string, { count: number; value: number }> = {
    Jan: { count: 4, value: 54000 },
    Feb: { count: 6, value: 89000 },
    Mar: { count: 8, value: 145000 },
    Apr: { count: 9, value: 110000 },
    May: { count: 12, value: 240000 },
    Jun: { count: 0, value: 0 }
  };

  leads.forEach((l) => {
    const date = new Date(l.createdAt);
    const month = date.toLocaleString("en-US", { month: "short" });
    if (monthlyData[month]) {
      monthlyData[month].count += 1;
      monthlyData[month].value += l.estimatedValue;
    } else {
      monthlyData[month] = { count: 1, value: l.estimatedValue };
    }
  });

  const timelineChart = Object.entries(monthlyData).map(([month, data]) => ({
    name: month,
    leads: data.count,
    revenue: data.value
  }));

  return {
    totalValue,
    activeCount,
    winRate,
    wonValue,
    averageValue,
    totalLeads: leads.length,
    projectTypesChart,
    statusChart,
    regionChart,
    timelineChart
  };
};
