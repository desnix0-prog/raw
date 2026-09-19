import type {
  Collection,
  Conversation,
  Document,
  KnowledgeStats,
} from "@/lib/types";

/**
 * Phase 1 demo data — replaces real user data until Phase 2 (auth + DB).
 * Everywhere this data is rendered, the UI shows a "Demo data" badge.
 */

const day = 24 * 60 * 60 * 1000;
const now = Date.now();

export const demoDocuments: Document[] = [
  {
    id: "doc-ml-notes",
    title: "Machine Learning Notes",
    filename: "machine-learning-notes.pdf",
    fileType: "pdf",
    fileSize: 2_413_000,
    status: "ready",
    chunkCount: 148,
    pageCount: 42,
    isFavorite: true,
    collectionIds: ["col-research", "col-college"],
    excerpt:
      "Supervised vs. unsupervised learning, gradient descent, regularization, and model evaluation fundamentals.",
    content: `## 1. Supervised Learning
Supervised learning maps input features x to a label y using labeled training data. The two dominant families are regression (continuous y) and classification (discrete y).

Linear regression minimizes the mean squared error:
  J(theta) = (1 / 2m) * sum((h_theta(x_i) - y_i)^2)

Minimization is typically performed with gradient descent, which iteratively updates parameters in the direction of the negative gradient:
  theta_j := theta_j - alpha * dJ/dtheta_j

## 2. Gradient Descent Variants
- Batch gradient descent uses the full dataset per update. It is stable but slow on large data.
- Stochastic gradient descent (SGD) updates per example. Noisy but fast and able to escape shallow local minima.
- Mini-batch SGD (typical batch size 32–512) balances the two and is the default in practice.

## 3. Overfitting and Regularization
Overfitting: low training error, high validation error. Remedies include more data, simpler models, and regularization.

L2 regularization (ridge) adds lambda * sum(theta_j^2) to the cost, shrinking weights smoothly. L1 (lasso) produces sparse weights and can perform feature selection.

## 4. Model Evaluation
Always evaluate on a held-out test set. Use cross-validation for small datasets. Key metrics: accuracy (balanced classes), precision/recall (imbalanced), ROC-AUC (ranking quality).`,
    createdAt: new Date(now - 2 * day).toISOString(),
    updatedAt: new Date(now - 2 * day).toISOString(),
  },
  {
    id: "doc-product-design",
    title: "Product Design Research",
    filename: "product-design-research.pdf",
    fileType: "pdf",
    fileSize: 5_120_000,
    status: "ready",
    chunkCount: 203,
    pageCount: 67,
    isFavorite: false,
    collectionIds: ["col-work"],
    excerpt:
      "Interview synthesis, Jobs-to-be-Done findings, and usability benchmarks from the Q3 research round.",
    content: `## Research Summary — Q3
We conducted 14 user interviews and 5 usability sessions across two cohorts: first-time users and power users.

## Key findings
1. Onboarding drop-off happens at the "connect a source" step. Users want to see value before configuring anything.
2. Power users overwhelmingly asked for keyboard-first navigation. 11 of 14 mentioned it unprompted.
3. Trust in AI output is correlated with visible sources. Showing citations doubled stated trust in follow-up questions.

## Jobs-to-be-Done
When a new project kicks off, I want to reuse research I already did, so I don't have to re-read everything from scratch.

## Recommendations
- Move the demo content ahead of configuration in onboarding.
- Ship citations with every AI answer (highest trust lever).
- Add a command palette (Cmd+K) in the next quarter.`,
    createdAt: new Date(now - 5 * day).toISOString(),
    updatedAt: new Date(now - 5 * day).toISOString(),
  },
  {
    id: "doc-startup-ideas",
    title: "Startup Ideas",
    filename: "startup-ideas.md",
    fileType: "md",
    fileSize: 18_400,
    status: "ready",
    chunkCount: 34,
    isFavorite: true,
    collectionIds: ["col-projects"],
    excerpt:
      "A running list of ideas, ranked by personal unfair advantage, market size, and willingness to pay.",
    content: `# Startup Ideas

## Ranking criteria
- Unfair advantage: do I have insight or access others don't?
- Willingness to pay: is someone already paying for a bad solution?
- Distribution: can I reach the first 100 users cheaply?

## Ideas
1. **Knowledge base for consultants** — consultants re-sell the same thinking. A private RAG assistant for their past deliverables has clear ROI and existing budgets.
2. **API for citation-grounded answers** — every AI feature needs retrieval + citations. Selling the boring plumbing is underrated.
3. **Local-first study companion** — students with poor internet. Offline document Q&A with sync.

## Current favorite
Idea #1: small market, but the buyer is obvious and the value prop is measurable in hours saved.`,
    createdAt: new Date(now - 9 * day).toISOString(),
    updatedAt: new Date(now - 1 * day).toISOString(),
  },
  {
    id: "doc-js-notes",
    title: "JavaScript Notes",
    filename: "javascript-notes.txt",
    fileType: "txt",
    fileSize: 42_800,
    status: "embedding",
    chunkCount: 61,
    isFavorite: false,
    collectionIds: ["col-college"],
    excerpt:
      "Closures, event loop, promises vs. async/await, and module systems — final exam prep notes.",
    content: `JavaScript Notes — Event Loop & Async

The event loop has one call stack, one microtask queue (promises), and one macrotask queue (setTimeout, I/O). After each macrotask, the entire microtask queue drains before the next macrotask runs.

Closures: an inner function retains access to the outer function's scope even after the outer function returns. Used for data privacy and factories.

Promises represent a future value. Async/await is syntax over promises; await pauses the async function, never the main thread.

Modules: ES modules (import/export) are static and tree-shakeable; CommonJS (require) is dynamic and evaluated at runtime.`,
    createdAt: new Date(now - 12 * day).toISOString(),
    updatedAt: new Date(now - 12 * day).toISOString(),
  },
  {
    id: "doc-thesis-draft",
    title: "Thesis Draft — Chapter 3",
    filename: "thesis-draft-ch3.pdf",
    fileType: "pdf",
    fileSize: 890_000,
    status: "failed",
    chunkCount: 0,
    pageCount: 24,
    isFavorite: false,
    collectionIds: ["col-college"],
    excerpt:
      "Draft of the methodology chapter. Text extraction failed — retry processing.",
    content: "",
    createdAt: new Date(now - 15 * day).toISOString(),
    updatedAt: new Date(now - 15 * day).toISOString(),
  },
];

export const demoCollections: Collection[] = [
  {
    id: "col-work",
    name: "Work",
    description: "Research and docs from my job",
    documentIds: ["doc-product-design"],
    color: "#6366f1",
  },
  {
    id: "col-college",
    name: "College",
    description: "Course notes and thesis material",
    documentIds: ["doc-ml-notes", "doc-js-notes", "doc-thesis-draft"],
    color: "#0ea5e9",
  },
  {
    id: "col-projects",
    name: "Projects",
    description: "Side projects and ideas",
    documentIds: ["doc-startup-ideas"],
    color: "#10b981",
  },
  {
    id: "col-research",
    name: "Research",
    description: "Papers and long-form reading",
    documentIds: ["doc-ml-notes"],
    color: "#f59e0b",
  },
];

export const demoConversations: Conversation[] = [
  {
    id: "chat-1",
    title: "Three main ideas in ML notes",
    messageCount: 4,
    createdAt: new Date(now - 3 * 60 * 60 * 1000).toISOString(),
    updatedAt: new Date(now - 40 * 60 * 1000).toISOString(),
    messages: [
      {
        id: "m1",
        role: "user",
        content: "What are the three main ideas in my machine learning notes?",
        createdAt: new Date(now - 3 * 60 * 60 * 1000).toISOString(),
      },
      {
        id: "m2",
        role: "assistant",
        content:
          "Based on your Machine Learning Notes, the three main ideas are:\n\n1. **Supervised learning fundamentals** — mapping inputs to labels via regression and classification, trained by minimizing cost with gradient descent.\n2. **Optimization trade-offs** — batch, stochastic, and mini-batch gradient descent each balance stability against speed; mini-batch is the practical default.\n3. **Generalization** — overfitting is controlled with regularization (L1/L2) and honest evaluation on held-out data using metrics matched to the problem.",
        sources: [
          {
            documentId: "doc-ml-notes",
            documentTitle: "Machine Learning Notes",
            pages: "Pages 1–3",
          },
          {
            documentId: "doc-ml-notes",
            documentTitle: "Machine Learning Notes",
            pages: "Pages 12–14",
          },
        ],
        createdAt: new Date(now - 3 * 60 * 60 * 1000 + 3000).toISOString(),
      },
      {
        id: "m3",
        role: "user",
        content: "When should I use L1 vs L2 regularization?",
        createdAt: new Date(now - 45 * 60 * 1000).toISOString(),
      },
      {
        id: "m4",
        role: "assistant",
        content:
          "Your notes put it this way: L2 (ridge) shrinks weights smoothly and is the default choice when you believe most features contribute a little. L1 (lasso) drives weights to exactly zero, so it doubles as feature selection when you suspect many features are irrelevant.",
        sources: [
          {
            documentId: "doc-ml-notes",
            documentTitle: "Machine Learning Notes",
            pages: "Page 18",
          },
        ],
        createdAt: new Date(now - 44 * 60 * 1000).toISOString(),
      },
    ],
  },
  {
    id: "chat-2",
    title: "Onboarding findings from design research",
    messageCount: 2,
    createdAt: new Date(now - 1 * day).toISOString(),
    updatedAt: new Date(now - 1 * day).toISOString(),
    messages: [
      {
        id: "m5",
        role: "user",
        content: "What did my research say about onboarding?",
        createdAt: new Date(now - 1 * day).toISOString(),
      },
      {
        id: "m6",
        role: "assistant",
        content:
          "Your Q3 research found that onboarding drop-off happens at the 'connect a source' step — users want to see value before configuring anything. The recommendation was to move demo content ahead of configuration.",
        sources: [
          {
            documentId: "doc-product-design",
            documentTitle: "Product Design Research",
            pages: "Pages 5–7",
          },
        ],
        createdAt: new Date(now - 1 * day + 4000).toISOString(),
      },
    ],
  },
  {
    id: "chat-3",
    title: "Startup idea ranking criteria",
    messageCount: 2,
    createdAt: new Date(now - 8 * day).toISOString(),
    updatedAt: new Date(now - 8 * day).toISOString(),
    messages: [
      {
        id: "m7",
        role: "user",
        content: "What criteria do I use to rank startup ideas?",
        createdAt: new Date(now - 8 * day).toISOString(),
      },
      {
        id: "m8",
        role: "assistant",
        content:
          "You rank ideas on three criteria: unfair advantage (insight or access others lack), willingness to pay (someone already paying for a bad solution), and distribution (a cheap path to the first 100 users).",
        sources: [
          {
            documentId: "doc-startup-ideas",
            documentTitle: "Startup Ideas",
            pages: "Page 1",
          },
        ],
        createdAt: new Date(now - 8 * day + 3000).toISOString(),
      },
    ],
  },
];

export const demoStats: KnowledgeStats = {
  totalDocuments: demoDocuments.length,
  totalChunks: demoDocuments.reduce((sum, d) => sum + d.chunkCount, 0),
  totalCollections: demoCollections.length,
  totalConversations: demoConversations.length,
};

export const demoUser = {
  name: "Alex Rivera",
  email: "alex@example.com",
  initials: "AR",
};

export function getDocument(id: string): Document | undefined {
  return demoDocuments.find((d) => d.id === id);
}

export function getConversation(id: string): Conversation | undefined {
  return demoConversations.find((c) => c.id === id);
}

/** Demo answer used by the chat page when the user asks a question (Phase 1 stand-in for RAG). */
export const demoAnswer = {
  content:
    "Based on your Machine Learning Notes, the three main ideas are:\n\n1. **Supervised learning fundamentals** — mapping inputs to labels via regression and classification, trained by minimizing a cost function with gradient descent.\n2. **Optimization trade-offs** — batch, stochastic, and mini-batch gradient descent each balance stability against speed; mini-batch SGD is the practical default.\n3. **Generalization** — overfitting is controlled with regularization (L1/L2) and honest evaluation on held-out data.",
  sources: [
    {
      documentId: "doc-ml-notes",
      documentTitle: "Machine Learning Notes",
      pages: "Pages 1–3",
    },
    {
      documentId: "doc-ml-notes",
      documentTitle: "Machine Learning Notes",
      pages: "Pages 12–14",
    },
  ],
};
