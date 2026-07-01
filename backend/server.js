const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const highlights = [
    {
        title: "Spiritual Journeys",
        image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=2076&auto=format&fit=crop", // Varanasi
        desc: "Find peace in the sacred cities of Varanasi, Rishikesh, and Bodh Gaya."
    },
    {
        title: "Royal Heritage",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1974&auto=format&fit=crop", // Rajasthan Palace
        desc: "Walk through the grand palaces and forts of Rajasthan."
    },
    {
        title: "Vibrant Festivals",
        image: "https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=1936&auto=format&fit=crop", // Holi/Diwali
        desc: "Experience the colors of Holi and the lights of Diwali."
    }
];

app.get('/api/highlights', (req, res) => {
    res.json(highlights);
});

app.post('/api/login', (req, res) => {
    const { username } = req.body;
    // Mock authentication
    if (username) {
        res.json({ success: true, user: { name: username } });
    } else {
        res.status(400).json({ success: false, message: 'Username required' });
    }
});

const destinations = [
    {
        id: 1,
        name: "Taj Mahal, Agra",
        image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=2071&auto=format&fit=crop",
        desc: "Symbol of love and architectural marvel."
    },
    {
        id: 2,
        name: "Kerala Backwaters",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2070&auto=format&fit=crop",
        desc: "Serene backwaters and lush greenery."
    },
    {
        id: 3,
        name: "Ladakh",
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070&auto=format&fit=crop",
        desc: "Breathtaking landscapes and monasteries."
    },
    {
        id: 4,
        name: "Goa Beaches",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1974&auto=format&fit=crop",
        desc: "Sun, sand, and vibrant nightlife."
    }
];

app.get('/api/destinations', (req, res) => {
    res.json(destinations);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
