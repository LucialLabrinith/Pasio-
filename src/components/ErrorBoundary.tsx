import { Component, ErrorInfo, ReactNode } from 'react';
import { buildGeneralWhatsAppUrl } from '../data/events';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(_error: Error, _info: ErrorInfo) {
    // Handled gracefully by fallback UI
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#FAF5EE] px-6 py-16 text-center text-[#242B22]">
          <div className="max-w-md rounded-2xl border border-[#E8DDD0] bg-[#FFFFFF] p-8 shadow-sm">
            <h1 className="font-serif text-2xl font-semibold">The Grand Affair</h1>
            <p className="mt-3 text-sm leading-relaxed text-[#525C4F]">
              Something went wrong while displaying the page. Please reload or reach out to our
              planning team directly on WhatsApp.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => window.location.reload()}
                className="min-h-[44px] w-full sm:w-auto rounded-full border border-[#DDD0C0] px-5 py-2.5 text-sm font-semibold text-[#242B22] hover:border-[#B87D56]"
              >
                Reload Page
              </button>
              <a
                href={buildGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] w-full sm:w-auto items-center justify-center rounded-full bg-[#B87D56] px-5 py-2.5 text-sm font-semibold text-[#FFFFFF] hover:bg-[#9B6542]"
              >
                Plan on WhatsApp
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
