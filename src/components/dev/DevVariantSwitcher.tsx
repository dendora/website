import React, { useState, useEffect } from 'react';
import { Settings, X, Dices } from 'lucide-react';
import { 
  setRuntimeVariant, 
  getRuntimeVariant, 
  clearRuntimeVariant, 
  getAvailableVariants
} from '../../lib/runtime-variant';
import { type SiteVariant } from '../../lib/site-config';
import { Button } from '../ui';

interface DevVariantSwitcherProps {
  onVariantChange?: () => void;
}

export const DevVariantSwitcher: React.FC<DevVariantSwitcherProps> = ({ onVariantChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentVariant, setCurrentVariant] = useState<SiteVariant | null>(null);
  const variants = getAvailableVariants();

  useEffect(() => {
    setCurrentVariant(getRuntimeVariant());
  }, []);

  // Don't render in production
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  const handleVariantChange = (variant: SiteVariant) => {
    setRuntimeVariant(variant);
    setCurrentVariant(variant);
    setIsOpen(false);
    
    // Trigger page reload to apply changes
    if (onVariantChange) {
      onVariantChange();
    } else {
      window.location.reload();
    }
  };

  const handleClear = () => {
    clearRuntimeVariant();
    setCurrentVariant(null);
    setIsOpen(false);
    
    // Trigger page reload to apply changes
    if (onVariantChange) {
      onVariantChange();
    } else {
      window.location.reload();
    }
  };

  const handleRandomVariant = () => {
    const randomIndex = Math.floor(Math.random() * variants.length);
    const randomVariant = variants[randomIndex];
    handleVariantChange(randomVariant.key);
  };

  return (
    <>
      {/* Floating buttons */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
        {/* Random variant button (dice) */}
        <Button
          onClick={handleRandomVariant}
          className="bg-orange-600 hover:bg-orange-700 text-white shadow-lg rounded-full p-3"
          title="Dev: Random Variant 🎲"
        >
          <Dices className="h-5 w-5" />
        </Button>
        
        {/* Settings button */}
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-purple-600 hover:bg-purple-700 text-white shadow-lg rounded-full p-3"
          title="Dev: Switch Variant"
        >
          <Settings className="h-5 w-5" />
        </Button>
      </div>

      {/* Variant switcher panel */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Dev: Variant Switcher</h2>
                <p className="text-sm text-gray-600 mt-1">Test different website variants</p>
              </div>
              <Button
                onClick={() => setIsOpen(false)}
                variant="ghost"
                className="p-2"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="p-6 space-y-4">
              {/* Current variant indicator */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-sm font-medium text-gray-700 mb-1">Current Variant:</div>
                <div className="text-lg font-bold text-purple-600">
                  {currentVariant 
                    ? variants.find(v => v.key === currentVariant)?.name || currentVariant
                    : 'Default (from config file)'
                  }
                </div>
              </div>

              {/* Variant options */}
              <div className="space-y-3">
                {variants.map((variant) => (
                  <button
                    key={variant.key}
                    onClick={() => handleVariantChange(variant.key)}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                      currentVariant === variant.key
                        ? 'border-purple-500 bg-purple-50'
                        : 'border-gray-200 hover:border-purple-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="font-semibold text-gray-900 mb-1">
                      {variant.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {variant.description}
                    </div>
                  </button>
                ))}
              </div>

              {/* Clear override button */}
              {currentVariant && (
                <div className="pt-4 border-t border-gray-200">
                  <Button
                    onClick={handleClear}
                    variant="outline"
                    className="w-full"
                  >
                    Clear Override (Use Config Default)
                  </Button>
                </div>
              )}

              {/* Instructions */}
              <div className="text-xs text-gray-500 bg-yellow-50 p-3 rounded-lg">
                <strong>Note:</strong> This switcher only works in development. 
                Changes are saved in localStorage and persist across page reloads.
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};