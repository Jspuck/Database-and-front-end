import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://lqxupkhygcfnsrlhdyos.supabase.co';  // Use your actual Supabase URL
const SUPABASE_API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxxeHVwa2h5Z2NmbnNybGhkeW9zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU1OTIyMDksImV4cCI6MjA0MTE2ODIwOX0.jjpgiFx8L1b3n_1trErREDg5-sHHMamqcMimrbGxILY';  // Use your actual API key

export const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);
