const SUPABASE_URL = 'https://lfchstxykxtnyienkseh.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxmY2hzdHh5a3h0bnlpZW5rc2VoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU3MTkzNzksImV4cCI6MjEwMTI5NTM3OX0.6IAEYifKKx0XKXTuoi2B0kX2ws-IS0wIw0uu4Lnp3wM';

const supabaseHeaders = {
  'apikey': SUPABASE_KEY,
  'Authorization': 'Bearer ' + SUPABASE_KEY,
  'Content-Type': 'application/json',
  'Prefer': 'return=representation'
};

async function sbCreateReservation(data) {
  const res = await fetch(SUPABASE_URL + '/rest/v1/reservations', {
    method: 'POST',
    headers: supabaseHeaders,
    body: JSON.stringify({
      full_name: data.full_name,
      phone: data.phone,
      email: data.email || '',
      service_type: data.service_type,
      reservation_date: data.reservation_date,
      reservation_time: data.reservation_time || '',
      guests: parseInt(data.guests) || 1,
      notes: data.notes || '',
      status: 'pending'
    })
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(err || 'Failed to save reservation');
  }
  return await res.json();
}

async function sbGetReservations() {
  const res = await fetch(
    SUPABASE_URL + '/rest/v1/reservations?select=*&order=created_at.desc',
    { headers: supabaseHeaders }
  );
  if (!res.ok) throw new Error('Failed to load reservations');
  return await res.json();
}

async function sbUpdateReservation(id, status) {
  const res = await fetch(SUPABASE_URL + '/rest/v1/reservations?id=eq.' + id, {
    method: 'PATCH',
    headers: supabaseHeaders,
    body: JSON.stringify({ status })
  });
  if (!res.ok) throw new Error('Failed to update');
  return true;
}

async function sbDeleteReservation(id) {
  const res = await fetch(SUPABASE_URL + '/rest/v1/reservations?id=eq.' + id, {
    method: 'DELETE',
    headers: supabaseHeaders
  });
  if (!res.ok) throw new Error('Failed to delete');
  return true;
}
