import { createClient } from "@supabase/supabase-js"

const supabase =createClient("https://itlduaacyysyrohqofvn.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0bGR1YWFjeXlzeXJvaHFvZnZuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDYwODg1MzQsImV4cCI6MjAyMTY2NDUzNH0.3SO_bC2AfcW6F_ULTbh5T7XTf5K1jX-xJ0DC0BYUiXM");
export default supabase;