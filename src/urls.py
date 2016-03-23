from django.conf.urls import url, include
from django.contrib import admin
from django.contrib.staticfiles import views


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'', include('apps.core.urls', namespace='core')),
]

if settings.DEBUG:
    urlpatterns += [
        url(r'^static/(?P<path>.*)$', views.serve),
    ]

