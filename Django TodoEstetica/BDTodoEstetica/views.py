from django.shortcuts import render,redirect
from django.views.generic.base import TemplateView
from django.views.generic.list import ListView
from django.views.generic.detail import DetailView
from django.views.generic.edit import CreateView,UpdateView,DeleteView
from .models import Producto,Tienda
from django.urls import reverse_lazy
from .forms import CreateProduct 
from BDTodoEstetica.serializers import ProductoSerializer
from rest_framework import generics 


# Create your views here.
class StaffUser(object):
    def dispatch(self, request, *args, **kwargs):
        if not request.user.is_staff:
            return redirect(reverse_lazy('login'))
        return super(StaffUser,self).dispatch(request, *args, **kwargs)
    
class inicio(TemplateView):
     template_name = "BDTodoEstetica/index.html"
     
     def get (self,request, *args, **kwargs):
        Productos = Producto.objects.all()
        Tiendas = Tienda.objects.all()
        return render (request, self.template_name,{'Productos':Productos,'Tiendas':Tiendas})
        

class registro (TemplateView):
    template_name = "BDTodoEstetica/registro.html"

class contacto (TemplateView):
    template_name = "BDTodoEstetica/contacto.html"

class listProducto(StaffUser,ListView):
    model = Producto
    ordering = ["-Creacion"]
    paginate_by = 8

class DetailProducto(StaffUser,DetailView):
    model = Producto
   
class ProductoCreate(StaffUser, CreateView):
    model = Producto
    form_class = CreateProduct
    success_url = reverse_lazy('inicio:lista')
    
 
class ProductoUpdate(StaffUser,UpdateView):
    model = Producto
    form_class = CreateProduct
    template_name_suffix = '_update_form'

    def get_success_url(self):
        return reverse_lazy('inicio:update',args=[self.object.id])+'?ok'

class ProductoDelete(StaffUser,DeleteView):
    model = Producto
    success_url = reverse_lazy('inicio:lista')

class ProductoList(generics.ListCreateAPIView):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer

class ProductoDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Producto.objects.all()
    serializer_class = ProductoSerializer