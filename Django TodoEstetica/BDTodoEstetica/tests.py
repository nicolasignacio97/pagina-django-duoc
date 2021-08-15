from django.test import TestCase
from .models import Producto
from django.contrib.auth.models import User

# Create your tests here.
class ProductTestCase(TestCase):
    def setUp(self):
        User.objects.create_user()

    def test_product_exists(self):
        exists = Producto.objects.filter()