const express = require('express');
const router = express.Router();

const nekretnine = [
    { id: 1, naziv: "kuca K", opis: "uz more", cijena: 278000, lokacija: "pula", broj_soba: 4, povrsina: 91 }
];

router.get('/', (req, res) => {
    res.status(200).json(nekretnine);
});

outer.get('/:id', (req, res) => {
    const nekretninaId = parseInt(req.params.id);
    const nekretnina = nekretnine.find(p => p.id === nekretninaId);

    if (nekretnina) {
        res.status(200).json(nekretnina);
    } else {
        res.status(404).json({ message: 'nije pronadeno' });
    }
});

router.post('/', (req, res) => {
    const { naziv, opis, cijena, lokacija, broj_soba, povrsina } = req.body;

    if (!naziv || !opis || cijena <= 0 || !lokacija || broj_soba <= 0 || povrsina <= 0) {
        return res.status(400).json({ message: "nesto ste krivo unjeli" });
    }

    const newNekretnina = { id: nekretnine.length + 1, naziv, opis, cijena, lokacija, broj_soba, povrsina };
    nekretnine.push(newNekretnina);
    res.status(201).json(newNekretnina);
});

router.put('/:id', (req, res) => {
    const nekretninaId = parseInt(req.params.id);
    const { naziv, opis, cijena, lokacija, broj_soba, povrsina } = req.body;

    const nekretninaIndex = nekretnine.findIndex(p => p.id === nekretninaId);
    if (nekretninaIndex === -1) {
        return res.status(404).json({ message: 'nije pronadeno' });
    }

    nekretnine[nekretninaIndex] = { id: nekretninaId, naziv, opis, cijena, lokacija, broj_soba, povrsina };
    res.status(200).json(nekretnine[nekretninaIndex]);
});

router.patch('/:id', (req, res) => {
    const nekretninaId = parseInt(req.params.id);
    const updates = req.body;

    const nekretnina = nekretnine.find(p => p.id === nekretninaId);
    if (!nekretnina) {
        return res.status(404).json({ message: 'nije pronadeno' });
    }

    Object.assign(nekretnina, updates);
    res.status(200).json(nekretnina);
});

router.delete('/:id', (req, res) => {
    const nekretninaId = parseInt(req.params.id);
    const nekretninaIndex = nekretnine.findIndex(p => p.id === nekretninaId);

    if (nekretninaIndex === -1) {
        return res.status(404).json({ message: 'nije pronadeno' });
    }

    nekretnine.splice(nekretninaIndex, 1);
    res.status(200).json({ message: 'uspjesno obrisano' });
});

export default router;
