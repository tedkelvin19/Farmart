from django.contrib import admin
from .models import *


# Register your models here.
admin.site.register(User)
admin.site.register(Animal)
admin.site.register(Category)
admin.site.register(Cart)
admin.site.register(Order)