--
-- PostgreSQL database dump
--

-- Dumped from database version 17.5
-- Dumped by pg_dump version 17.0

-- Started on 2025-06-16 10:23:23 CEST

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3734 (class 0 OID 17194)
-- Dependencies: 222
-- Data for Name: abonnes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.abonnes (id, nom, email) FROM stdin;
1	Laura	laura@test.com
\.


--
-- TOC entry 3730 (class 0 OID 17173)
-- Dependencies: 218
-- Data for Name: coachs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.coachs (id, nom, specialite) FROM stdin;
2	Jean Dupont	Musculation
\.


--
-- TOC entry 3732 (class 0 OID 17180)
-- Dependencies: 220
-- Data for Name: cours; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cours (id, nom, description, coach_id) FROM stdin;
4	Cardio Mix	Cours intensif de 45 minutes	2
\.


--
-- TOC entry 3735 (class 0 OID 17202)
-- Dependencies: 223
-- Data for Name: cours_abonnes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.cours_abonnes (cours_id, abonne_id) FROM stdin;
4	1
\.


--
-- TOC entry 3741 (class 0 OID 0)
-- Dependencies: 221
-- Name: abonnes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.abonnes_id_seq', 1, true);


--
-- TOC entry 3742 (class 0 OID 0)
-- Dependencies: 217
-- Name: coachs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.coachs_id_seq', 2, true);


--
-- TOC entry 3743 (class 0 OID 0)
-- Dependencies: 219
-- Name: cours_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.cours_id_seq', 4, true);


-- Completed on 2025-06-16 10:23:23 CEST

--
-- PostgreSQL database dump complete
--
-- PostgreSQL full schema and data for salle_de_sport

-- Table: coachs
CREATE TABLE public.coachs (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(100),
    specialite VARCHAR(100)
);

-- Table: cours
CREATE TABLE public.cours (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(100),
    description TEXT,
    coach_id INTEGER REFERENCES public.coachs(id) ON DELETE SET NULL
);

-- Table: abonnes
CREATE TABLE public.abonnes (
    id SERIAL PRIMARY KEY,
    nom VARCHAR(100),
    email VARCHAR(100) UNIQUE
);

-- Table: cours_abonnes (relation N:N)
CREATE TABLE public.cours_abonnes (
    cours_id INTEGER REFERENCES public.cours(id) ON DELETE CASCADE,
    abonne_id INTEGER REFERENCES public.abonnes(id) ON DELETE CASCADE,
    PRIMARY KEY (cours_id, abonne_id)
);

-- Données de la table: coachs
INSERT INTO public.coachs (id, nom, specialite) VALUES
(2, 'Jean Dupont', 'Musculation');

-- Données de la table: abonnes
INSERT INTO public.abonnes (id, nom, email) VALUES
(1, 'Laura', 'laura@test.com');

-- Données de la table: cours
INSERT INTO public.cours (id, nom, description, coach_id) VALUES
(4, 'Cardio Mix', 'Cours intensif de 45 minutes', 2);

-- Données de la table: cours_abonnes
INSERT INTO public.cours_abonnes (cours_id, abonne_id) VALUES
(4, 1);

-- Reprise des séquences
SELECT pg_catalog.setval('public.abonnes_id_seq', 1, true);
SELECT pg_catalog.setval('public.coachs_id_seq', 2, true);
SELECT pg_catalog.setval('public.cours_id_seq', 4, true);

-- Fin du script SQL

