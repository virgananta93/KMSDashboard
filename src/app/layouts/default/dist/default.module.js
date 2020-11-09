"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DefaultModule = void 0;
var data_registration_component_1 = require("./../../modules/posts/data-registration/data-registration.component");
var new_registration_component_1 = require("./../../modules/posts/new-registration/new-registration.component");
var angular_crumbs_1 = require("angular-crumbs");
var shared_module_1 = require("./../../shared/shared.module");
var posts_component_1 = require("./../../modules/posts/posts.component");
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var default_component_1 = require("./default.component");
var dashboard_component_1 = require("./../../modules/dashboard/dashboard.component");
var patient_component_1 = require("./../../modules/patient/patient.component");
var analytics_component_1 = require("./../../modules/analytics/analytics.component");
var router_1 = require("@angular/router");
var flex_layout_1 = require("@angular/flex-layout");
var ng2_charts_1 = require("ng2-charts");
var http_1 = require("@angular/common/http");
var form_field_1 = require("@angular/material/form-field");
var forms_1 = require("@angular/forms");
var a11y_1 = require("@angular/cdk/a11y");
var clipboard_1 = require("@angular/cdk/clipboard");
var drag_drop_1 = require("@angular/cdk/drag-drop");
var portal_1 = require("@angular/cdk/portal");
var scrolling_1 = require("@angular/cdk/scrolling");
var stepper_1 = require("@angular/cdk/stepper");
var table_1 = require("@angular/cdk/table");
var tree_1 = require("@angular/cdk/tree");
var autocomplete_1 = require("@angular/material/autocomplete");
var badge_1 = require("@angular/material/badge");
var bottom_sheet_1 = require("@angular/material/bottom-sheet");
var button_1 = require("@angular/material/button");
var button_toggle_1 = require("@angular/material/button-toggle");
var card_1 = require("@angular/material/card");
var checkbox_1 = require("@angular/material/checkbox");
var chips_1 = require("@angular/material/chips");
var stepper_2 = require("@angular/material/stepper");
var datepicker_1 = require("@angular/material/datepicker");
var dialog_1 = require("@angular/material/dialog");
var divider_1 = require("@angular/material/divider");
var expansion_1 = require("@angular/material/expansion");
var grid_list_1 = require("@angular/material/grid-list");
var icon_1 = require("@angular/material/icon");
var input_1 = require("@angular/material/input");
var list_1 = require("@angular/material/list");
var menu_1 = require("@angular/material/menu");
var core_2 = require("@angular/material/core");
var paginator_1 = require("@angular/material/paginator");
var progress_bar_1 = require("@angular/material/progress-bar");
var progress_spinner_1 = require("@angular/material/progress-spinner");
var radio_1 = require("@angular/material/radio");
var select_1 = require("@angular/material/select");
var sidenav_1 = require("@angular/material/sidenav");
var slider_1 = require("@angular/material/slider");
var slide_toggle_1 = require("@angular/material/slide-toggle");
var snack_bar_1 = require("@angular/material/snack-bar");
var sort_1 = require("@angular/material/sort");
var table_2 = require("@angular/material/table");
var tabs_1 = require("@angular/material/tabs");
var toolbar_1 = require("@angular/material/toolbar");
var tooltip_1 = require("@angular/material/tooltip");
var tree_2 = require("@angular/material/tree");
var overlay_1 = require("@angular/cdk/overlay");
var DefaultModule = /** @class */ (function () {
    function DefaultModule() {
    }
    DefaultModule = __decorate([
        core_1.NgModule({
            declarations: [
                default_component_1.DefaultComponent,
                dashboard_component_1.DashboardComponent,
                posts_component_1.PostsComponent,
                analytics_component_1.AnalyticsComponent,
                patient_component_1.PatientComponent,
                new_registration_component_1.NewRegistrationComponent,
                data_registration_component_1.DataRegistrationComponent
            ],
            imports: [
                common_1.CommonModule,
                router_1.RouterModule,
                shared_module_1.SharedModule,
                sidenav_1.MatSidenavModule,
                divider_1.MatDividerModule,
                flex_layout_1.FlexLayoutModule,
                card_1.MatCardModule,
                paginator_1.MatPaginatorModule,
                table_2.MatTableModule,
                angular_crumbs_1.BreadcrumbModule,
                tabs_1.MatTabsModule,
                select_1.MatSelectModule,
                icon_1.MatIconModule,
                tooltip_1.MatTooltipModule,
                button_toggle_1.MatButtonToggleModule,
                ng2_charts_1.ChartsModule,
                button_1.MatButtonModule,
                http_1.HttpClientModule,
                form_field_1.MatFormFieldModule,
                autocomplete_1.MatAutocompleteModule,
                forms_1.FormsModule,
                input_1.MatInputModule,
                a11y_1.A11yModule,
                clipboard_1.ClipboardModule,
                stepper_1.CdkStepperModule,
                table_1.CdkTableModule,
                tree_1.CdkTreeModule,
                drag_drop_1.DragDropModule,
                autocomplete_1.MatAutocompleteModule,
                badge_1.MatBadgeModule,
                bottom_sheet_1.MatBottomSheetModule,
                button_1.MatButtonModule,
                button_toggle_1.MatButtonToggleModule,
                card_1.MatCardModule,
                checkbox_1.MatCheckboxModule,
                chips_1.MatChipsModule,
                stepper_2.MatStepperModule,
                datepicker_1.MatDatepickerModule,
                dialog_1.MatDialogModule,
                divider_1.MatDividerModule,
                expansion_1.MatExpansionModule,
                grid_list_1.MatGridListModule,
                icon_1.MatIconModule,
                input_1.MatInputModule,
                list_1.MatListModule,
                menu_1.MatMenuModule,
                core_2.MatNativeDateModule,
                paginator_1.MatPaginatorModule,
                progress_bar_1.MatProgressBarModule,
                progress_spinner_1.MatProgressSpinnerModule,
                radio_1.MatRadioModule,
                core_2.MatRippleModule,
                select_1.MatSelectModule,
                sidenav_1.MatSidenavModule,
                slider_1.MatSliderModule,
                slide_toggle_1.MatSlideToggleModule,
                snack_bar_1.MatSnackBarModule,
                sort_1.MatSortModule,
                table_2.MatTableModule,
                tabs_1.MatTabsModule,
                toolbar_1.MatToolbarModule,
                tooltip_1.MatTooltipModule,
                tree_2.MatTreeModule,
                overlay_1.OverlayModule,
                portal_1.PortalModule,
                scrolling_1.ScrollingModule,
            ]
        })
    ], DefaultModule);
    return DefaultModule;
}());
exports.DefaultModule = DefaultModule;
