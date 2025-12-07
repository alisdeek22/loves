// ==================== DATA ====================
        let settings = {
            password: '1234',
            startDate: new Date('2024-01-01'),
            loveMessage: 'أنتِ نور عيني وسبب سعادتي... كل يوم معكِ هو نعمة من السماء. أحبكِ للأبد 💕',
            songUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
        };

        const photos = [
            { url: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400&h=400&fit=crop', caption: 'قلبي معك دائماً' },
            { url: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=400&fit=crop', caption: 'لحظات لا تُنسى' },
            { url: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=400&h=400&fit=crop', caption: 'معاً للأبد' },
            { url: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=400&fit=crop', caption: 'أجمل الأوقات' },
            { url: 'https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=400&h=400&fit=crop', caption: 'حب بلا حدود' },
            { url: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&h=400&fit=crop', caption: 'روحي وروحك' },
            { url: 'https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=400&h=400&fit=crop', caption: 'ضحكتك حياتي' },
            { url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop', caption: 'عيونك نجومي' },
            { url: 'https://images.unsplash.com/photo-1501901609772-df0848060b33?w=400&h=400&fit=crop', caption: 'أنت كل شيء' }
        ];

        const memories = [
            { date: '١ يناير ٢٠٢٤', title: 'أول لقاء ✨', desc: 'اليوم الذي التقينا فيه لأول مرة، كان يوماً سحرياً غيّر حياتي للأبد. من تلك اللحظة عرفت أنك أنت.', image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400&fit=crop' },
            { date: '١٤ فبراير ٢٠٢٤', title: 'عيد حبنا الأول 💕', desc: 'أول عيد حب نحتفل به معاً. الورود، الشموع، وأنت... كل شيء كان مثالياً.', image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600&h=400&fit=crop' },
            { date: '٢٠ مارس ٢٠٢٤', title: 'رحلتنا معاً 🌅', desc: 'أول رحلة سافرنا فيها معاً. اكتشفنا أماكن جديدة وصنعنا ذكريات لن ننساها.', image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=400&fit=crop' },
            { date: '١٥ مايو ٢٠٢٤', title: 'أجمل مفاجأة 🎁', desc: 'يوم فاجأتني بأجمل هدية. ليست الهدية المهمة، بل الحب في عينيك.', image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&h=400&fit=crop' }
        ];

        const loveQuotes = [
            "أنتِ لست فقط حبي، أنتِ حياتي كلها ❤️",
            "معكِ أشعر أن العالم مكان أجمل 🌹",
            "قلبي لا يعرف الراحة إلا بقربك 💕",
            "أحبك أكثر مما تتخيلين، وأكثر كل يوم 💖",
            "أنتِ أجمل صدفة حدثت في حياتي ✨",
            "عيناك وطني الذي أسكن فيه 🏠",
            "أنتِ الضوء في ظلام أيامي 🌟",
            "حبك هو أجمل قصة في حياتي 📖"
        ];

        let currentQuoteIndex = 0;
        let currentPhotoIndex = 0;
        let isPlaying = false;

        // ==================== INITIALIZATION ====================
        document.addEventListener('DOMContentLoaded', function() {
            createFloatingHearts();
            renderPhotos();
            renderMemories();
            renderLoveNotes();
            loadSettings();
            startQuoteRotation();
        });

        function createFloatingHearts() {
            const container = document.getElementById('floatingHearts');
            for (let i = 0; i < 15; i++) {
                const heart = document.createElement('span');
                heart.className = 'floating-heart';
                heart.textContent = '❤';
                heart.style.left = Math.random() * 100 + '%';
                heart.style.animationDelay = Math.random() * 10 + 's';
                heart.style.color = 'var(--love-rose)';
                container.appendChild(heart);
            }
        }

        function renderPhotos() {
            // Preview
            const preview = document.getElementById('photoPreview');
            preview.innerHTML = photos.slice(0, 3).map((p, i) => `
                <div class="photo-card" onclick="openLightbox(${i})">
                    <img src="${p.url}" alt="${p.caption}">
                </div>
            `).join('');

            // Full grid
            const grid = document.getElementById('fullPhotoGrid');
            grid.innerHTML = photos.map((p, i) => `
                <div class="photo-card" onclick="openLightbox(${i})">
                    <img src="${p.url}" alt="${p.caption}">
                </div>
            `).join('');
        }

        function renderMemories() {
            // First memory preview
            document.getElementById('firstMemoryDate').textContent = memories[0].date;
            document.getElementById('firstMemoryTitle').textContent = memories[0].title;
            document.getElementById('firstMemoryDesc').textContent = memories[0].desc;

            // Full timeline
            const timeline = document.getElementById('memoriesTimeline');
            timeline.innerHTML = memories.map(m => `
                <div class="timeline-item">
                    <div class="timeline-card">
                        <img src="${m.image}" alt="${m.title}">
                        <div class="timeline-date">📅 ${m.date}</div>
                        <h4 class="timeline-title"><span>❤</span> ${m.title}</h4>
                        <p class="timeline-desc">${m.desc}</p>
                    </div>
                </div>
            `).join('');
        }

        function renderLoveNotes() {
            const list = document.getElementById('loveNotesList');
            list.innerHTML = loveQuotes.map(q => `
                <div class="love-note-item">
                    <p>${q}</p>
                </div>
            `).join('');
        }

        function loadSettings() {
            document.getElementById('settingSongUrl').value = settings.songUrl;
            document.getElementById('settingStartDate').value = settings.startDate.toISOString().split('T')[0];
            document.getElementById('settingMessage').value = settings.loveMessage;
            document.getElementById('audioPlayer').src = settings.songUrl;
            updateUI();
        }

        function updateUI() {
            document.getElementById('letterText').textContent = settings.loveMessage;
            document.getElementById('mainLoveMessage').textContent = '"' + settings.loveMessage + '"';
            startCounter();
        }

        function startQuoteRotation() {
            setInterval(() => {
                currentQuoteIndex = (currentQuoteIndex + 1) % loveQuotes.length;
                document.getElementById('dailyQuote').textContent = loveQuotes[currentQuoteIndex];
            }, 5000);
        }

        // ==================== ENVELOPE ====================
        function openEnvelope() {
            const envelope = document.getElementById('envelope');
            if (!envelope.classList.contains('open')) {
                envelope.classList.add('open');
                document.getElementById('envelopeHint').classList.add('hidden');
                setTimeout(() => {
                    document.getElementById('continueBtn').classList.remove('hidden');
                }, 1200);
            }
        }

        function goToPassword() {
            document.getElementById('envelopePage').classList.remove('active');
            document.getElementById('passwordPage').classList.add('active');
            document.getElementById('passwordInput').focus();
        }

        // ==================== PASSWORD ====================
        function checkPassword(e) {
            e.preventDefault();
            const input = document.getElementById('passwordInput');
            const card = document.getElementById('passwordCard');
            const error = document.getElementById('passwordError');
            
            if (input.value === settings.password) {
                document.getElementById('passwordPage').classList.remove('active');
                document.getElementById('mainPage').classList.add('active');
                startCounter();
            } else {
                input.classList.add('error');
                error.classList.remove('hidden');
                card.classList.add('shake');
                setTimeout(() => card.classList.remove('shake'), 500);
            }
        }

        // ==================== COUNTER ====================
        function startCounter() {
            updateCounter();
            setInterval(updateCounter, 1000);
        }

        function updateCounter() {
            const now = new Date();
            const diff = now - settings.startDate;
            
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((diff % (1000 * 60)) / 1000);

            document.getElementById('counterDays').textContent = days;
            document.getElementById('counterHours').textContent = hours;
            document.getElementById('counterMinutes').textContent = minutes;
            document.getElementById('counterSeconds').textContent = seconds;
        }

        // ==================== NAVIGATION ====================
        function showPage(page) {
            // Hide all content
            document.getElementById('homeContent').style.display = 'none';
            document.getElementById('photosContent').classList.remove('active');
            document.getElementById('memoriesContent').classList.remove('active');
            document.getElementById('loveNotesContent').classList.remove('active');
            document.getElementById('settingsContent').classList.remove('active');

            // Show selected
            if (page === 'home') {
                document.getElementById('homeContent').style.display = 'block';
            } else if (page === 'photos') {
                document.getElementById('photosContent').classList.add('active');
            } else if (page === 'memories') {
                document.getElementById('memoriesContent').classList.add('active');
            } else if (page === 'love-notes') {
                document.getElementById('loveNotesContent').classList.add('active');
            } else if (page === 'settings') {
                document.getElementById('settingsContent').classList.add('active');
            }

            // Update nav
            document.querySelectorAll('.nav-item').forEach(item => {
                item.classList.remove('active');
                if (item.dataset.page === page) {
                    item.classList.add('active');
                }
            });

            window.scrollTo(0, 0);
        }

        // ==================== MUSIC ====================
        function toggleMusic() {
            const audio = document.getElementById('audioPlayer');
            const playIcon = document.getElementById('playIcon');
            const pauseIcon = document.getElementById('pauseIcon');

            if (isPlaying) {
                audio.pause();
                playIcon.style.display = 'block';
                pauseIcon.style.display = 'none';
            } else {
                audio.play();
                playIcon.style.display = 'none';
                pauseIcon.style.display = 'block';
            }
            isPlaying = !isPlaying;
        }

        // ==================== LIGHTBOX ====================
        function openLightbox(index) {
            currentPhotoIndex = index;
            const lightbox = document.getElementById('lightbox');
            document.getElementById('lightboxImage').src = photos[index].url;
            document.getElementById('lightboxCaption').textContent = photos[index].caption;
            lightbox.classList.add('active');
        }

        function closeLightbox() {
            document.getElementById('lightbox').classList.remove('active');
        }

        function nextPhoto() {
            currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
            document.getElementById('lightboxImage').src = photos[currentPhotoIndex].url;
            document.getElementById('lightboxCaption').textContent = photos[currentPhotoIndex].caption;
        }

        function prevPhoto() {
            currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
            document.getElementById('lightboxImage').src = photos[currentPhotoIndex].url;
            document.getElementById('lightboxCaption').textContent = photos[currentPhotoIndex].caption;
        }

        // ==================== SETTINGS ====================
        function saveSettings(e) {
            e.preventDefault();
            
            settings.songUrl = document.getElementById('settingSongUrl').value || settings.songUrl;
            settings.startDate = new Date(document.getElementById('settingStartDate').value) || settings.startDate;
            settings.loveMessage = document.getElementById('settingMessage').value || settings.loveMessage;
            
            document.getElementById('audioPlayer').src = settings.songUrl;
            updateUI();

            const btn = document.getElementById('saveBtn');
            btn.classList.add('saved');
            btn.innerHTML = '<span>✓</span><span>تم الحفظ!</span>';
            setTimeout(() => {
                btn.classList.remove('saved');
                btn.innerHTML = '<span>💾</span><span>حفظ الإعدادات</span>';
            }, 2000);
        }

        // Close lightbox on escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeLightbox();
            }
        });