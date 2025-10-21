    (function () {
        const form = document.getElementById('contactForm');
        const statusEl = document.getElementById('formStatus');

        if (!form) return;

        form.addEventListener('submit', async function (e) {
          e.preventDefault();
          statusEl.textContent = '⏳ Slanje...';

          try {
            const res = await fetch(form.action, {
              method: 'POST',
              body: new FormData(form),
              headers: { 'Accept': 'application/json' }
            });

            if (res.ok) {
              form.reset();
              statusEl.textContent = '✅ Poruka je uspešno poslata. Hvala na javljanju!';
              statusEl.style.color = 'green';
            } else {
              let msg = '❌ Došlo je do greške. Pokušajte ponovo.';
              try {
                const data = await res.json();
                if (data && data.errors) {
                  msg = '❌ ' + data.errors.map(e => e.message).join(', ');
                }
              } catch (_) {}
              statusEl.textContent = msg;
              statusEl.style.color = 'crimson';
            }
          } catch (err) {
            statusEl.textContent = '❌ Nema veze sa serverom. Pokušajte kasnije.';
            statusEl.style.color = 'crimson';
          }
        });
      })();