// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://wshnskcixattmrwsxihb.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndzaG5za2NpeGF0dG1yd3N4aWhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA2MTA2MjEsImV4cCI6MjA2NjE4NjYyMX0.YHcEjRLAOKNiaFFEc6eHULT0fTpRqe-WwS_NhC87SqA";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);