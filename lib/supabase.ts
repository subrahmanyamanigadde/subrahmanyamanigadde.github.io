import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Track visitor information
 */
export const trackVisitor = async (
  name: string,
  sessionId: string
) => {
  try {
    const { error } = await supabase.from('visitors').insert([
      {
        name,
        session_id: sessionId,
        visit_time: new Date().toISOString(),
        device: navigator.userAgent,
        location: await getVisitorLocation(),
      },
    ]);

    if (error) {
      console.warn('Failed to track visitor:', error);
    }
  } catch (err) {
    console.warn('Tracking error:', err);
  }
};

/**
 * Track visitor events
 */
export const trackEvent = async (
  sessionId: string,
  eventType: string,
  page: string
) => {
  try {
    const { error } = await supabase.from('mission_events').insert([
      {
        session_id: sessionId,
        event_type: eventType,
        page,
        timestamp: new Date().toISOString(),
      },
    ]);

    if (error) {
      console.warn('Failed to track event:', error);
    }
  } catch (err) {
    console.warn('Event tracking error:', err);
  }
};

/**
 * Save transmission (contact form submission)
 */
export const saveTransmission = async (
  name: string,
  email: string,
  message: string
) => {
  try {
    const { error } = await supabase.from('transmissions').insert([
      {
        name,
        email,
        message,
        created_at: new Date().toISOString(),
      },
    ]);

    if (error) {
      throw new Error(error.message);
    }

    return { success: true };
  } catch (err) {
    console.error('Transmission error:', err);
    return { success: false, error: err instanceof Error ? err.message : 'Unknown error' };
  }
};

/**
 * Get visitor location (optional - requires geolocation API)
 */
const getVisitorLocation = async (): Promise<string> => {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    return `${data.city}, ${data.country_name}`;
  } catch {
    return 'Unknown';
  }
};
