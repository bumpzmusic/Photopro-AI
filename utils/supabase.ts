import { createClient } from '@supabase/supabase-js';

// Use environment variables or fall back to provided credentials to prevent "supabaseUrl is required" error
const supabaseUrl = process.env.SUPABASE_URL || "https://nlreqdkrexglmijcfyqh.supabase.co";
const supabaseKey = process.env.SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5scmVxZGtyZXhnbG1pamNmeXFoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA2NzQ1NzEsImV4cCI6MjA4NjI1MDU3MX0.yh7N_GGnjdKprwiaqZkXQqHF7NjBAm_Nmj6RLoooFUk";

if (!supabaseUrl || !supabaseKey) {
  console.error("Supabase URL or Key is missing!");
}

export const supabase = createClient(supabaseUrl, supabaseKey);