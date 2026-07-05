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

// --- JSON DATABASE HELPER FOR DATA COLLECTION ---
const fs = require('fs');
const path = require('path');
const dataFilePath = path.join(__dirname, 'data.json');

// Initialize data.json if it doesn't exist
if (!fs.existsSync(dataFilePath)) {
    fs.writeFileSync(dataFilePath, JSON.stringify({ registrations: [], groupJoins: [] }, null, 2));
}

const readData = () => {
    try {
        const raw = fs.readFileSync(dataFilePath, 'utf8');
        return JSON.parse(raw);
    } catch (e) {
        return { registrations: [], groupJoins: [] };
    }
};

const writeData = (data) => {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
};

// --- DATA COLLECTION ENDPOINTS ---
app.post('/api/register', (req, res) => {
    const { name, email, destination, date } = req.body;
    if (!name || !email || !destination || !date) {
        return res.status(400).json({ success: false, message: 'All fields (name, email, destination, date) are required.' });
    }
    
    const db = readData();
    const newRegistration = {
        id: Date.now(),
        name,
        email,
        destination,
        date,
        createdAt: new Date().toISOString()
    };
    db.registrations.push(newRegistration);
    writeData(db);
    
    console.log(`New registration collected:`, newRegistration);
    res.json({ success: true, message: 'Your tour has been successfully registered!', registration: newRegistration });
});

app.post('/api/group', (req, res) => {
    const { groupName, email } = req.body;
    if (!groupName || !email) {
        return res.status(400).json({ success: false, message: 'Group name and email are required.' });
    }
    
    const db = readData();
    const newJoin = {
        id: Date.now(),
        groupName,
        email,
        createdAt: new Date().toISOString()
    };
    db.groupJoins.push(newJoin);
    writeData(db);
    
    console.log(`New group join collected:`, newJoin);
    res.json({ success: true, message: `Successfully joined ${groupName}! Check your email for updates.` });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
