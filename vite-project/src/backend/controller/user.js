import { db } from "../db.js";

export const getUsers = (_,res) => {
    const query = "SELECT * FROM usuarios";

    db.query(query, (err,data) => {
  
        if (err)
            return res.json(err);

        return res.status(200).json(data.rows);
    });
};

export const addUser = (req, res) => {
    const values = [
        req.body.nome,
        req.body.email,
        req.body.telefone,
        req.body.endereco,       
    ];
    const q =
        "INSERT INTO usuarios (nome, email, telefone, endereco) VALUES ($1, $2, $3, $4)";

        db.query(q, values, (err) => {

        if (err) return res.json(err);
    
        return res.status(200).json("Usuário criado com sucesso.");
    });
};

