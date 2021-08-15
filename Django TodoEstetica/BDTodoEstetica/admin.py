from django.contrib import admin
from .models import Tienda, Producto

# Register your models here.
class TiendaAdmin(admin.ModelAdmin):
    readonly_fields = ["Creacion","Actualizacion"]
    list_display = ["NombreTienda","Creacion","Actualizacion"]
    search_fields = ["NombreTienda"]
    
class ProductoAdmin(admin.ModelAdmin):
    readonly_fields = ["Creacion","Actualizacion"]
    list_display = ["NombreProducto","Marca","Precio"]
    search_fields = ["NombreProducto"]
    list_filter = ["Marca" , "Tienda"]

admin.site.register(Tienda,TiendaAdmin) 
admin.site.register(Producto,ProductoAdmin)

