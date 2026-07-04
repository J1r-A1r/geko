from django.urls import path
from .views import product_list, product_detail, product_create, product_update, product_delete, product_search, product_filter



urlpatterns = [
    path('', product_list, name='deck_list'),
    path('<int:pk>/', product_detail, name='deck_detail'),
    path('<int:pk>/update/', product_update, name='deck_update'),
    path('<int:pk>/delete/', product_delete, name='deck_delete'),
    path('create/', product_create, name='deck_create')
    path('search/', product_search, name='deck_search')
    path('filter/', product_filter, name='deck_filter')
]