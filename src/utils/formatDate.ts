/**
 * Gestion de date pouvant être : une année (YYYY), une période, ou une date complète (ex: YYYY-MM, YYYY-MM-DD)
 */
export function formatDate(date: string): string {
  if (!date) return "";

  // Cas année seulement (YYYY)
  if (/^\d{4}$/.test(date)) {
    return date;
  }

  // Cas période, ex: "2022/2023", "2020-2021"
  if (/^(?:\d{4}[/\-]\d{4})$/.test(date)) {
    return date.replace(/[/\-]/, " — ");
  }

  // Cas date normale (YYYY-MM ou YYYY-MM-DD)
  const d = new Date(date);
  if (!Number.isNaN(d.getTime())) {
    return d.toLocaleDateString("fr-FR", { year: "numeric", month: "long" });
  }

  // Si rien n'a matché, retourne la valeur brute (sécurité)
  return date;
}
