import { useState, useEffect } from 'react';
import i18n from 'i18next';
import deJSON from "@/assets/translations/de.json";

interface TranslationData {
  [key: string]: any;
}

interface TranslationHookData {
  translation: TranslationData | null;
  loading: boolean;
  error: Error | null;
}

function useTranslationFile(): TranslationHookData {
  const [translation, setTranslation] = useState<TranslationData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchTranslation() {
      setLoading(true);

      try {
        const translationJSON = i18n.language === 'de' ? deJSON : null;

        if (!translationJSON) {
          throw new Error('Translation file not found');
        }

        setTranslation(translationJSON?.translation);
      } catch (error: any) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    }

    fetchTranslation();
  }, []);

  return { translation, loading, error };
}

export default useTranslationFile;
