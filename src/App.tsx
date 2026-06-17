import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { ScrollToTop } from './components/ScrollToTop'
import { HomePage } from './pages/HomePage'

// Code-split secondary routes — the home page bundle stays lean and
// subsequent pages are fetched on demand.
const ComparePage = lazy(() =>
  import('./pages/ComparePage').then((m) => ({ default: m.ComparePage })),
)
const EnquiriesPage = lazy(() =>
  import('./pages/EnquiriesPage').then((m) => ({ default: m.EnquiriesPage })),
)
const LeadFormPage = lazy(() =>
  import('./pages/LeadFormPage').then((m) => ({ default: m.LeadFormPage })),
)
const PackagesPage = lazy(() =>
  import('./pages/PackagesPage').then((m) => ({ default: m.PackagesPage })),
)
const WorkPage = lazy(() =>
  import('./pages/WorkPage').then((m) => ({ default: m.WorkPage })),
)

function RouteFallback() {
  return (
    <div
      className="flex min-h-[60vh] items-center justify-center"
      role="status"
      aria-live="polite"
    >
      <span className="sr-only">Loading…</span>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/packages" element={<PackagesPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/compare" element={<ComparePage />} />
            <Route path="/enquiries" element={<EnquiriesPage />} />
            <Route path="/contact/:kind" element={<LeadFormPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  )
}
