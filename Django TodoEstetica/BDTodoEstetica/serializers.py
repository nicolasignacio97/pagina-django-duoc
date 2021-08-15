from rest_framework import serializers
from BDTodoEstetica.models import Producto

class ProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producto
        fields = ('NombreProducto', 'Precio', 'Descripcion', 'Marca', 'Tienda')