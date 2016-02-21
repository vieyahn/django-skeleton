from django.conf.urls import url, include
from django.contrib import admin
from apps.core.urls import router
from django.views.generic import TemplateView
from rest_framework.authtoken.views import obtain_auth_token


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', TemplateView.as_view(template_name="index.html")),
    url(r'^api/token/', obtain_auth_token, name='api-token'),
    url(r'^api/', include(router.urls)),
]
