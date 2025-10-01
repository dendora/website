import { useEffect } from 'react';
import { setRuntimeVariant, getAvailableVariants } from '../../lib/runtime-variant';
import { type SiteVariant } from '../../lib/site-config';

/**
 * Development hook for keyboard shortcuts to switch variants
 * Only works in development mode
 */
export function useDevVariantShortcuts() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return;

    const handleKeyPress = (event: KeyboardEvent) => {
      // Only trigger when Ctrl/Cmd + Shift is held
      if (!(event.ctrlKey || event.metaKey) || !event.shiftKey) return;

      const variants = getAvailableVariants();
      let targetVariant: SiteVariant | null = null;

      switch (event.key) {
        case '1':
          targetVariant = 'international';
          break;
        case '2':
          targetVariant = 'local-hungary';
          break;
        case '3':
          targetVariant = 'regional-cee';
          break;
        case '4':
          targetVariant = 'minimal-tech';
          break;
        case '0':
          targetVariant = null; // Clear override
          break;
        case 'r':
        case 'R':
          // Random variant
          const variants = getAvailableVariants();
          const randomIndex = Math.floor(Math.random() * variants.length);
          targetVariant = variants[randomIndex].key;
          break;
        default:
          return;
      }

      event.preventDefault();
      
      if (targetVariant) {
        setRuntimeVariant(targetVariant);
        console.log(`🎨 Switched to variant: ${targetVariant}`);
      } else if (event.key === '0') {
        setRuntimeVariant(null);
        console.log('🎨 Cleared variant override');
      } else if (event.key.toLowerCase() === 'r') {
        console.log(`🎲 Random variant: ${targetVariant}`);
      }
      
      // Reload page to apply changes
      window.location.reload();
    };

    window.addEventListener('keydown', handleKeyPress);
    
    // Log shortcuts on mount
    console.log(`
🎨 Dev Variant Shortcuts (Development Only):
• Ctrl/Cmd + Shift + 1: International
• Ctrl/Cmd + Shift + 2: Local Hungary  
• Ctrl/Cmd + Shift + 3: Regional CEE
• Ctrl/Cmd + Shift + 4: Minimal Tech
• Ctrl/Cmd + Shift + R: Random variant 🎲
• Ctrl/Cmd + Shift + 0: Clear override
    `);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);
}