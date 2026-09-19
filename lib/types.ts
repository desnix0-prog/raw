/**
 * Shared domain types for Recall AI.
 * Phase 1 uses these for demo data; in Phase 2+ they map 1:1 to DB rows.
 */

export type ProcessingStatus = "processing" | "embedding" | "ready" | "failed";

export type FileType = "pdf" | "txt" | "md";

export interface Document {
  id: string;
  title: string;
  filename: string;
  fileType: FileType;
  fileSize: number; // bytes
  status: ProcessingStatus;
  chunkCount: number;
  pageCount?: number;
  isFavorite: boolean;
  collectionIds: string[];
  /** Short excerpt shown on cards. */
  excerpt: string;
  /** Extracted text preview shown on the document page. */
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  documentIds: string[];
  color: string; // tailwind-friendly hex used as inline style
}

export interface ChatSource {
  documentId: string;
  documentTitle: string;
  pages: string; // e.g. "Pages 12–14"
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  sources?: ChatSource[];
  createdAt: string;
}

export interface Conversation {
  id: string;
  title: string;
  messageCount: number;
  messages: ChatMessage[];
  createdAt: string;
  updatedAt: string;
}

export interface KnowledgeStats {
  totalDocuments: number;
  totalChunks: number;
  totalCollections: number;
  totalConversations: number;
}
