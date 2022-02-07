@extends('layout')

@section('meta-title') Home - Laravel Tailwind Boilerplate Vue Ready @endsection

@push('css')

@endpush

@section('content')
    <div id='app'></div>
    <script src="{{ mix('js/app.js') }}" type="text/javascript"></script>
@endsection

@push('js')


@endpush
