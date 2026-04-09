-- Run this in your Supabase SQL Editor:
-- https://supabase.com/dashboard/project/ckkbkojunnkozzmpunlb/sql/new

CREATE TABLE IF NOT EXISTS page_content (
  key TEXT PRIMARY KEY,
  value JSONB NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS (allow anon reads, only authenticated writes)
ALTER TABLE page_content ENABLE ROW LEVEL SECURITY;

-- Public can read
CREATE POLICY "Anyone can read page_content"
  ON page_content FOR SELECT
  USING (true);

-- Only authenticated users can write
CREATE POLICY "Authenticated users can write page_content"
  ON page_content FOR ALL
  USING (auth.role() = 'authenticated')
  WITH CHECK (auth.role() = 'authenticated');
