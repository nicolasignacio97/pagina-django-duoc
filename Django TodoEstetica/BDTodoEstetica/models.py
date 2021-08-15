from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Tienda (models.Model):
    
    NombreTienda = models.CharField(max_length=40)
    Rut_Tienda = models.CharField(primary_key=True,max_length=15)
    Creacion = models.DateTimeField(auto_now_add=True)
    Actualizacion =models.DateTimeField(auto_now=True)

    def __str__(self):
     return self.NombreTienda
    


class Producto (models.Model):
    
    NombreProducto = models.CharField(max_length=80)  
    Precio = models.CharField(max_length=8)
    Descripcion = models.TextField()
    Marca = models.CharField(max_length=20)
    Tienda = models.ManyToManyField(Tienda)
    Imagen = models.ImageField(upload_to="MediaProductos",null=True)
    Creacion = models.DateTimeField(auto_now_add=True)
    Actualizacion =models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.NombreProducto
    