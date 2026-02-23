import { useLang } from '../context/LanguageContext';
import hu from './hu';
import en from './en';

/**
 * Returns the translation object for the current language.
 * Usage: const t = useTranslation();  →  t.nav.programs
 */
export const useTranslation = () => {
  const { lang } = useLang();
  return lang === 'hu' ? hu : en;
};
