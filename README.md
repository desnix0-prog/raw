# Recall AI

**Everything you know, one question away.**

A personal AI knowledge base. Upload documents, organize them into a library,
and ask questions answered from *your* documents — with sources.

## Phase 1 — Visual MVP (current)

- Landing page (marketing site)
- Dashboard UI with realistic demo data
- Library, document detail, chats, collections, settings (demo)
- Responsive layout (desktop sidebar / mobile bottom nav + slide-over)
- Dark / light / system theme
- No auth, database, or RAG yet (those come in Phases 2–5)

## Getting started

```bash
npm install
npm run dev
# open http://localhost:3000
```

Demo data is clearly labeled in the UI (`lib/demo-data.ts`) and will be
replaced by real per-user data in Phase 2.

## Roadmap

1. Landing + dashboard UI + demo data ✅
2. Auth (email/password + Google) + PostgreSQL
3. Upload + storage + text extraction
4. Chunking + embeddings + pgvector
5. RAG chat + citations
6. Search + collections + chat history
7. Polish, accessibility, performance
