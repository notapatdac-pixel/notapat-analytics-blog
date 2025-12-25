import "./App.css";

function App() {
  return (
    <div class="min-h-screen bg-color-brown-100 p-8">
      <div class="max-w-6xl mx-auto space-y-12">
        {/* Typography Preview */}
        <section class="bg-color-white p-8 rounded-lg shadow-sm">
          <h2 class="text-headline-2 text-color-brown-600 mb-6">Typography Scale</h2>
          <div class="space-y-4">
            <div>
              <p class="text-headline-1 text-color-brown-600">Headline 1</p>
              <p class="text-body-3 text-color-brown-400 mt-1">3.25rem (52px) • Semibold</p>
            </div>
            <div>
              <p class="text-headline-2 text-color-brown-600">Headline 2</p>
              <p class="text-body-3 text-color-brown-400 mt-1">2.5rem (40px) • Semibold</p>
            </div>
            <div>
              <p class="text-headline-3 text-color-brown-600">Headline 3</p>
              <p class="text-body-3 text-color-brown-400 mt-1">1.5rem (24px) • Semibold</p>
            </div>
            <div>
              <p class="text-headline-4 text-color-brown-600">Headline 4</p>
              <p class="text-body-3 text-color-brown-400 mt-1">1.25rem (20px) • Semibold</p>
            </div>
            <div>
              <p class="text-body-1 text-color-brown-600">Body 1</p>
              <p class="text-body-3 text-color-brown-400 mt-1">1rem (16px) • Medium</p>
            </div>
            <div>
              <p class="text-body-2 text-color-brown-600">Body 2</p>
              <p class="text-body-3 text-color-brown-400 mt-1">0.875rem (14px) • Medium</p>
            </div>
            <div>
              <p class="text-body-3 text-color-brown-600">Body 3</p>
              <p class="text-body-3 text-color-brown-400 mt-1">0.75rem (12px) • Medium</p>
            </div>
          </div>
        </section>

        {/* Neutral Colors Preview */}
        <section class="bg-color-white p-8 rounded-lg shadow-sm">
          <h2 class="text-headline-2 text-color-brown-600 mb-6">Neutral Colors</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="bg-color-brown-600 rounded-lg p-6 text-center">
              <p class="text-body-2 text-color-white font-semibold">Brown 600</p>
              <p class="text-body-3 text-color-white opacity-80 mt-1">#26231e</p>
            </div>
            <div class="bg-color-brown-500 rounded-lg p-6 text-center">
              <p class="text-body-2 text-color-white font-semibold">Brown 500</p>
              <p class="text-body-3 text-color-white opacity-80 mt-1">#43403b</p>
            </div>
            <div class="bg-color-brown-400 rounded-lg p-6 text-center">
              <p class="text-body-2 text-color-white font-semibold">Brown 400</p>
              <p class="text-body-3 text-color-white opacity-80 mt-1">#75716b</p>
            </div>
            <div class="bg-color-brown-300 rounded-lg p-6 text-center">
              <p class="text-body-2 text-color-brown-600 font-semibold">Brown 300</p>
              <p class="text-body-3 text-color-brown-600 opacity-80 mt-1">#dad6d1</p>
            </div>
            <div class="bg-color-brown-200 rounded-lg p-6 text-center">
              <p class="text-body-2 text-color-brown-600 font-semibold">Brown 200</p>
              <p class="text-body-3 text-color-brown-600 opacity-80 mt-1">#efeeeb</p>
            </div>
            <div class="bg-color-brown-100 rounded-lg p-6 text-center">
              <p class="text-body-2 text-color-brown-600 font-semibold">Brown 100</p>
              <p class="text-body-3 text-color-brown-600 opacity-80 mt-1">#f9f8f6</p>
            </div>
            <div class="bg-color-white rounded-lg p-6 text-center">
              <p class="text-body-2 text-color-brown-600 font-semibold">White</p>
              <p class="text-body-3 text-color-brown-600 opacity-80 mt-1">#ffffff</p>
            </div>
          </div>
        </section>

        {/* Brand Colors Preview */}
        <section class="bg-color-white p-8 rounded-lg shadow-sm">
          <h2 class="text-headline-2 text-color-brown-600 mb-6">Brand Colors</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="bg-color-brand-orange rounded-lg p-6 text-center">
              <p class="text-body-2 text-color-brown-600 font-semibold">Brand Orange</p>
              <p class="text-body-3 text-color-brown-600 opacity-80 mt-1">#f2b68c</p>
            </div>
            <div class="bg-color-brand-green rounded-lg p-6 text-center">
              <p class="text-body-2 text-color-white font-semibold">Brand Green</p>
              <p class="text-body-3 text-color-white opacity-80 mt-1">#12b279</p>
            </div>
            <div class="bg-color-brand-green-soft rounded-lg p-6 text-center">
              <p class="text-body-2 text-color-brown-600 font-semibold">Brand Green Soft</p>
              <p class="text-body-3 text-color-brown-600 opacity-80 mt-1">#d7f2e9</p>
            </div>
            <div class="bg-color-brand-red rounded-lg p-6 text-center">
              <p class="text-body-2 text-color-white font-semibold">Brand Red</p>
              <p class="text-body-3 text-color-white opacity-80 mt-1">#eb5164</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
