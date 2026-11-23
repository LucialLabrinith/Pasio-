import { Component, ErrorInfo, ReactNode } from 'react';
import { buildGeneralWhatsAppUrl } from '../data/menu';

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
        <div className="min-h-screen flex items-center justify-center bg-[#FBECEB] px-6 py-16 text-center text-[#3D2424]">
          <div className="max-w-md rounded-2xl border border-[#EAD5D3] bg-[#FFFDFC] p-8 shadow-sm">
            <h1 className="font-serif text-2xl font-semibold">Pasio Patisseries</h1>
            <p className="mt-3 text-sm leading-relaxed text-[#6B4747]">
              Something went wrong while displaying the menu. Please refresh the page or place your
              order directly on WhatsApp.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => window.location.reload()}
                className="min-h-[44px] w-full sm:w-auto rounded-full border border-[#DFC4C1] px-5 py-2.5 text-sm font-semibold text-[#3D2424] hover:border-[#B86F6F]"
              >
                Reload Page
              </button>
              <a
                href={buildGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] w-full sm:w-auto items-center justify-center rounded-full bg-[#B86F6F] px-5 py-2.5 text-sm font-semibold text-[#FFFDFC] hover:bg-[#9B5656]"
              >
                Order on WhatsApp
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
