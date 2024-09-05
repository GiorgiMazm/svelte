import { createClient } from '@supabase/supabase-js';
import { NEXT_PUBLIC_SUPABASE_ANON_KEY, SUPABASE_URL } from '$env/static/private';

export const supabase = createClient(SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY);
