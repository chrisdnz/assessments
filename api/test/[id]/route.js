// PUT request handler
export async function PUT(request, { params }) {
    try {
      const { id } = params;
      const data = await request.json();
      const updatedTest = await prisma.test.update({
        where: { id: Number(id) },
        data,
      });
      return new Response(JSON.stringify(updatedTest), { status: 200 });
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
  }
  
  // DELETE request handler
  export async function DELETE(request, { params }) {
    try {
      const { id } = params;
      await prisma.test.delete({
        where: { id: Number(id) },
      });
      return new Response(JSON.stringify({ message: 'Test deleted' }), { status: 200 });
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
  }