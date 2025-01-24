import { initialData } from "./seed";
import prisma from '../lib/prisma';
async function main() {

    await Promise.all([
        prisma.product.deleteMany(),
        prisma.category.deleteMany(),
        prisma.inventory.deleteMany(),
    ]);
}

// Properly invoke the main function using an IIFE
(async () => {
    await main(); // Ensure any async  operations are properly awaited
})();
