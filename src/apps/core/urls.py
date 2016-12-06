from django.conf.urls import url
from django.views.generic import TemplateView
from .views import AboutView


urlpatterns = [
    url(r'^$', TemplateView.as_view(template_name="base.html")),
    url(r'^about/$', AboutView.as_view()),
]
