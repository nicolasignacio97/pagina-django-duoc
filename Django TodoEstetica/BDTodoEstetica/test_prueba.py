import unittest
from prueba import probar, probarEmail

class TestProbar(unittest.TestCase):
    def test_sumar(self):
        self.assertAlmostEqual(probar(3,5),8)
        self.assertAlmostEqual(probar(3,0),3)
        self.assertAlmostEqual(probar(6,7),13)

class TestEmail (unittest.TestCase):
    def test_email(self):
        self.assertAlmostEquals(probarEmail("javier","@gmail.com"),"javier@gmail.com")
        self.assertAlmostEquals(probarEmail("nico","@gmail.com"),"nico@gmail.com")
        self.assertAlmostEquals(probarEmail("joaco","@gmail.com"),"joaco@gmail.com")