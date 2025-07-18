// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://ohqnzfwioffaqyhemkgv.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9ocW56Zndpb2ZmYXF5aGVta2d2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI3NjExODIsImV4cCI6MjA2ODMzNzE4Mn0.sYOJV35sOZqwGrHxQ-PNLSiQ0qpX-WBK_L4d3GLV1Ks";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});