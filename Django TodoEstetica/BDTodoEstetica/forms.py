from django import forms
from .models import Producto

class CreateProduct(forms.ModelForm):

 class Meta:
        model = Producto
        fields = ['NombreProducto','Precio','Descripcion','Marca','Tienda','Imagen']
        widgets={
            'NombreProducto':forms.TextInput(attrs={'class':'form form-control','placeholder':'Nombre De Producto'}),
            'Precio':forms.TextInput(attrs={'class':'form-control','placeholder':'Precio'}),
            'Descripcion':forms.Textarea(attrs={'class':'form-control','placeholder':'Descripcion','style':'height:8rem'}),
            'Marca':forms.TextInput(attrs={'class':'form-control','placeholder':'Marca de producto'}),
            'Tienda':forms.SelectMultiple(attrs={'class':'form-control'}),
            'imagen':forms.ImageField(widget=forms.FileInput(attrs={'class': 'btn btn-secondary'}))
        }

        labels= {
            'NombreProducto':'',
            'Precio':'',
            'Descripcion':'',
            'Marca':'',  
        }