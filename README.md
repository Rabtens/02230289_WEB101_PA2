This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

# Pokedex Web Application

## Introduction

This project is a Pokedex web application built using the React framework and Next.js. The Pokedex webpage serves as a comprehensive resource for Pokemon enthusiasts, allowing them to search for and retrieve detailed information about their favorite Pokemon, as well as keep track of the Pokemon they have "caught." The primary objective of this assignment is to demonstrate proficiency in building modern web applications using React, a popular and widely-adopted JavaScript library for creating user interfaces.

## Features

1. **Search Feature**: Allows users to search for Pokemon by name.
2. **Pokemon Details**: Displays detailed information about the searched Pokemon, including name, type, height, weight, abilities, and an image.
3. **Catch Pokemon**: Users can "catch" Pokemon and keep track of the ones they have caught.
4. **Pagination**: Implements pagination for navigating through the list of Pokemon.
5. **State Management**: Uses Zustand for managing the state of caught Pokemon.
6. **Component-based Architecture**: Utilizes React's component-based architecture for modular and reusable code.

## Technologies Used

- **React**: For building the user interface.
- **Next.js**: For server-side rendering and static site generation.
- **Zustand**: For state management.
- **PokeAPI**: To fetch data about the Pokemon.
- **ShadCN UI**: For UI components.

## Project Structure

├── app
│ ├── CaughtPokemonList.tsx
│ ├── Pagination.tsx
│ ├── PokemonCard.tsx
│ ├── PokemonList.tsx
│ └── SearchBar.tsx
├── pages
│ └── index.tsx
├── stores
│ └── usePokemonStore.ts
├── components
│ └── ui
│ └── button.tsx
│ └── pagination.tsx
└── README.md


## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js
- npm (Node Package Manager) or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd pokedex

