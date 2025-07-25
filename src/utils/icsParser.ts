// Parseur simple pour .ics Booking.com (synchronisé localement)
// Renvoie un tableau de string 'YYYY-MM-DD' pour chaque jour non disponible

export function parseICS(icsContent: string): string[] {
  const unavailable: string[] = [];
  const eventBlocks = icsContent.split('BEGIN:VEVENT').slice(1);

  for (const block of eventBlocks) {
    const summary = block.match(/SUMMARY:(.*)/)?.[1]?.trim();
    if (summary && summary.toLowerCase().includes('closed')) {
      const dtStart = block.match(/DTSTART;VALUE=DATE:(\d{8})/);
      const dtEnd = block.match(/DTEND;VALUE=DATE:(\d{8})/);
      if (dtStart && dtEnd) {
        const start = dtStart[1];
        const end = dtEnd[1];
        // On veut chaque jour de start (inclus) à end (exclu)
        let current = new Date(
          Number(start.slice(0, 4)),
          Number(start.slice(4, 6)) - 1,
          Number(start.slice(6, 8))
        );
        const endDate = new Date(
          Number(end.slice(0, 4)),
          Number(end.slice(4, 6)) - 1,
          Number(end.slice(6, 8))
        );
        while (current < endDate) {
          const y = current.getFullYear();
          const m = (current.getMonth() + 1).toString().padStart(2, '0');
          const d = current.getDate().toString().padStart(2, '0');
          unavailable.push(`${y}-${m}-${d}`);
          current.setDate(current.getDate() + 1);
        }
      }
    }
  }
  return unavailable;
}
