import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
    if (req.method !== "GET") {
        return res.status(405).json({
            erro: "Método não permitido",
        });
    }

    const busca = req.query.q?.trim();

    if (!busca || busca.length < 2) {
        return res.status(200).json([]);
    }

    try {
        const convidados = await prisma.convidado.findMany({
            where: {
                OR: [
                    {
                        nome: {
                            contains: busca,
                            mode: "insensitive",
                        },
                    },
                    {
                        sobrenome: {
                            contains: busca,
                            mode: "insensitive",
                        },
                    },
                    {
                        apelido: {
                            contains: busca,
                            mode: "insensitive",
                        },
                    },
                ],
            },

            select: {
                id: true,
                nome: true,
                sobrenome: true,
                apelido: true,
            },

            take: 8,
        });

        return res.status(200).json(convidados);
    } catch (error) {
        console.error("Erro ao buscar convidados:", error);

        return res.status(500).json({
            erro: "Não foi possível realizar a busca.",
        });
    }
}