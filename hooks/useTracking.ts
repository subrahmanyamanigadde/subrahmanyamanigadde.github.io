import { useEffect, useRef } from 'react';
import { trackVisitor, trackEvent } from '@/lib/supabase';

export const useTracking = (visitorName: string, sessionId: string) => {
  const hasTrackedVisit = useRef(false);

  useEffect(() => {
    if (!hasTrackedVisit.current && visitorName && sessionId) {
      trackVisitor(visitorName, sessionId);
      hasTrackedVisit.current = true;
    }
  }, [visitorName, sessionId]);

  const trackPageEvent = (page: string) => {
    trackEvent(sessionId, 'page_visit', page);
  };

  const trackInteractionEvent = (page: string, interaction: string) => {
    trackEvent(sessionId, 'interaction', `${page}:${interaction}`);
  };

  return {
    trackPageEvent,
    trackInteractionEvent,
  };
};
