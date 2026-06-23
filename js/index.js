(function () {
    'use strict';

    var TABS = ['bio', 'experience', 'projects', 'photos'];

    function switchTab(target) {
        TABS.forEach(function (id) {
            var panel = document.getElementById(id);
            var icon  = document.getElementById(id + '_icon');
            var isActive = id === target;
            panel.classList.toggle('tab-active', isActive);
            icon.classList.toggle('nav-active', isActive);
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        document.querySelectorAll('[data-tab]').forEach(function (btn) {
            btn.addEventListener('click', function () {
                switchTab(btn.dataset.tab);
            });
        });
    });
}());
