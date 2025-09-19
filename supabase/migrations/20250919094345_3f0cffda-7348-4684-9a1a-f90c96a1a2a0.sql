-- Create wishlist table
CREATE TABLE public.wishlist (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.wishlist ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (public wishlist)
CREATE POLICY "Anyone can join wishlist" 
ON public.wishlist 
FOR INSERT 
WITH CHECK (true);

-- Create policy to prevent reading (keep emails private)
CREATE POLICY "Wishlist is write-only for public" 
ON public.wishlist 
FOR SELECT 
USING (false);