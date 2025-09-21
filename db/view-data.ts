import { PrismaClient } from '../lib/generated/prisma'

async function viewData() {
  const prisma = new PrismaClient()

  try {
    console.log('🏪 NEXT STORE DATABASE CONTENTS\n')

    const products = await prisma.product.findMany()

    console.log(`📦 Found ${products.length} products:\n`)

    products.forEach((product, index) => {
      console.log(`${index + 1}. ${product.name}`)
      console.log(`   💰 Price: $${product.price}`)
      console.log(`   📂 Category: ${product.category}`)
      console.log(`   🏷️  Brand: ${product.brand}`)
      console.log(`   📦 Stock: ${product.stock}`)
      console.log(
        `   ⭐ Rating: ${product.rating} (${product.numReviews} reviews)`
      )
      console.log(`   🔗 Slug: ${product.slug}`)
      console.log(`   ✨ Featured: ${product.isFeatured ? 'Yes' : 'No'}`)
      console.log('')
    })

    console.log('🎯 Database connection successful!')
  } catch (error) {
    console.error('❌ Error connecting to database:', error)
  } finally {
    await prisma.$disconnect()
  }
}

viewData()
